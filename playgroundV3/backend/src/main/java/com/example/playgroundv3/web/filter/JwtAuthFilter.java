package com.example.playgroundv3.web.filter;

import com.example.playgroundv3.services.auth.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    public JwtAuthFilter(JwtService jwtService, UserDetailsService userService) {
        this.jwtService = jwtService;
        this.userDetailsService = userService;
    }

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request, // It's the data that we receive
            @NonNull HttpServletResponse response, // It's the data that we provide as a reply
            @NonNull FilterChain filterChain) // Contains the list of other filters that need to be executed
            throws ServletException, IOException
    {
        // When we make a call we need to pass the JWT token within the header(header called 'Authorization') // This is what will contain the bearer token
        final String authHeader = request.getHeader("Authorization");

        final String jwtToken;
        final String userEmail;

        // Checking if there is something in the header of the request and making sure that it holds the 'Bearer'
        if (authHeader == null || !authHeader.startsWith("Bearer ")){
            filterChain.doFilter(request,response); // sending the failed thing to the next filter
            return;
        }

        // If the header is valid we take the JWT token from it keeping in mind that the line is 'Bearer ......' and that is why we start from position 7
        jwtToken = authHeader.substring(7);
        userEmail =jwtService.extractUserEmail(jwtToken);

        // Checking if the email isn't nul and whether the user is already authenticated so that we don't have to do it again
        if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null){  // When SecurityContextHolder.getContext().getAuthentication() is null means that the user is not authenticated
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);
            if(this.jwtService.isValid(jwtToken, userDetails)) {
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                );
                authToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request)
                );
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        filterChain.doFilter(request, response);
    }
}

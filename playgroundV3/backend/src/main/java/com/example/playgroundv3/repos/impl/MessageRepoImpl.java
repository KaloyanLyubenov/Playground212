package com.example.playgroundv3.repos.impl;

import com.example.playgroundv3.domain.entites.MessageEntity;
import com.example.playgroundv3.repos.MessageRepo;
import com.example.playgroundv3.repos.impl.row_mappers.MessageRowMapper;
import com.example.playgroundv3.repos.impl.row_mappers.UserRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MessageRepoImpl implements MessageRepo {

    private final JdbcTemplate jdbcTemplate;

    public MessageRepoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<MessageEntity> findAllByOrderId(int orderID) {
        String sql = """
            SELECT *
            FROM messages
            WHERE order_id = ?;
            """;

        return jdbcTemplate.query(sql, new MessageRowMapper(), orderID);
    }

    @Override
    public int saveMessage(MessageEntity message) {
        String sql = """
                INSERT INTO messages(order_id, content, sender_id, receiver_id)
                VALUES (?, ?, ?, ?);
                """;

        return this.jdbcTemplate.update(sql, message.getOrderID(), message.getContent(), message.getSenderID(), message.getReceiverID());
    }
}

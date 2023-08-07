package com.example.playgroundv3.repos.impl.row_mappers;

import com.example.playgroundv3.domain.entites.MessageEntity;
import com.example.playgroundv3.domain.entites.UserEntity;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class MessageRowMapper implements RowMapper<MessageEntity> {
    @Override
    public MessageEntity mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new MessageEntity(
                rs.getInt("id"),
                rs.getInt("order_id"),
                rs.getString("content"),
                rs.getInt("sender_id"),
                rs.getInt("receiver_id")
        );
    }
}
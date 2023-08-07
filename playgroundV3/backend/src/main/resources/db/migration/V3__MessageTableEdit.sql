DROP TABLE messages;

create table messages
(
    id          INT PRIMARY KEY AUTO_INCREMENT,
    order_id    INT NOT NULL,
    content     TEXT NOT NULL,
    sender_id   INT  NOT NULL,
    receiver_id INT  not null,
    FOREIGN KEY (sender_id) REFERENCES users (id),
    FOREIGN KEY (receiver_id) REFERENCES users (id),
    FOREIGN KEY (order_id) REFERENCES orders(id)
);
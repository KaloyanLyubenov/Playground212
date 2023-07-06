create table user_roles
(
    id            INT PRIMARY KEY AUTO_INCREMENT,
    role          VARCHAR(255),
);

create table users_user_roles
(
    user_id    INT,
    user_role_id INT,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (user_role_id) REFERENCES user_roles (id),
    PRIMARY KEY (user_id, user_role_id)
);

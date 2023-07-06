use
playground;

create table media_types
(
    id         INT PRIMARY KEY AUTO_INCREMENT,
    media_type VARCHAR(255)
);

create table pictures
(
    id            INT PRIMARY KEY AUTO_INCREMENT,
    link          VARCHAR(255),
    media_type_id INT,
    FOREIGN KEY (media_type_id) REFERENCES media_types (id)
);

create table videos
(
    id            INT PRIMARY KEY AUTO_INCREMENT,
    link          VARCHAR(255),
    media_type_id INT,
    FOREIGN KEY (media_type_id) REFERENCES media_types (id)
);

create table users
(
    id         INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name  VARCHAR(255),
    password   VARCHAR(255),
    email      VARCHAR(255) UNIQUE,
    CONSTRAINT email_format CHECK (email REGEXP '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
)
    );

create table messages
(
    id          INT PRIMARY KEY AUTO_INCREMENT,
    content     TEXT,
    sender_id   INT,
    receiver_id INT,
    FOREIGN KEY (sender_id) REFERENCES users (id),
    FOREIGN KEY (receiver_id) REFERENCES users (id)
);

create table colors
(
    id    INT PRIMARY KEY AUTO_INCREMENT,
    color VARCHAR(255)
);

create table locations
(
    id           INT PRIMARY KEY AUTO_INCREMENT,
    latitude     DOUBLE,
    longitude    DOUBLE,
    thumbnail_id INT,
    FOREIGN KEY (thumbnail_id) REFERENCES pictures (id)
);

create table locations_suitable_colors
(
    location_id INT PRIMARY KEY,
    color_id    INT,
    FOREIGN KEY (location_id) REFERENCES locations (id),
    FOREIGN KEY (color_id) REFERENCES colors (id)
);

create table statuses
(
    id     INT PRIMARY KEY AUTO_INCREMENT,
    status VARCHAR(255)
);

create table orders
(
    id            INT PRIMARY KEY AUTO_INCREMENT,
    title         VARCHAR(255),
    comment       TEXT,
    submitter_id  INT,
    status_id     INT,
    media_type_id INT,
    FOREIGN KEY (submitter_id) REFERENCES users (id),
    FOREIGN KEY (status_id) REFERENCES users (id),
    FOREIGN KEY (media_type_id) references media_types (id)
);

create table orders_locations
(
    order_id    INT PRIMARY KEY AUTO_INCREMENT,
    location_id INT,
    FOREIGN KEY (order_id) REFERENCES orders (id),
    FOREIGN KEY (location_id) REFERENCES locations (id)
);

create table user_roles
(
    id   INT PRIMARY KEY AUTO_INCREMENT,
    role VARCHAR(255)
);

create table users_user_roles
(
    user_email   VARCHAR(255),
    user_role_id INT,
    FOREIGN KEY (user_email) REFERENCES users (email),
    FOREIGN KEY (user_role_id) REFERENCES user_roles (id),
    PRIMARY KEY (user_email, user_role_id)
);


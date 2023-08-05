use
playground;

create table media_types
(
    id         INT PRIMARY KEY AUTO_INCREMENT,
    media_type VARCHAR(255) NOT NULL
);

create table format_types
(
    id         INT PRIMARY KEY AUTO_INCREMENT,
    format_type VARCHAR(255) NOT NULL
);

create table users
(
    id         INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name  VARCHAR(255) NOT NULL,
    password   VARCHAR(255) NOT NULL,
    email      VARCHAR(255) UNIQUE,
    CONSTRAINT email_format CHECK (email REGEXP '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
)
    );

create table videos
(
    id          INT PRIMARY KEY AUTO_INCREMENT,
    link        VARCHAR(255) NOT NULL,
    media_type  VARCHAR(255) NOT NULL,
    for_user_id INT,
    FOREIGN KEY (for_user_id) REFERENCES users (id)
);

create table albums
(
    id                 INT PRIMARY KEY AUTO_INCREMENT,
    thumbnail_pic_name VARCHAR(255),
    album_name         VARCHAR(255) NOT NULL,
    time_of_day        VARCHAR(255) NOT NULL,
    media_type         VARCHAR(255) NOT NULL,
    order_id           INT
);

create table pictures
(
    id          INT PRIMARY KEY AUTO_INCREMENT,
    name        VARCHAR(255) NOT NULL,
    album_id    INT          NOT NULL,
    paid_for    BOOLEAN,
    FOREIGN KEY (album_id) REFERENCES albums (id)
);

create table messages
(
    id          INT PRIMARY KEY AUTO_INCREMENT,
    content     TEXT NOT NULL,
    sender_id   INT  NOT NULL,
    receiver_id INT  not null,
    FOREIGN KEY (sender_id) REFERENCES users (id),
    FOREIGN KEY (receiver_id) REFERENCES users (id)
);

create table colors
(
    id    INT PRIMARY KEY AUTO_INCREMENT,
    color VARCHAR(255) NOT NULL
);

create table locations
(
    id          INT PRIMARY KEY AUTO_INCREMENT,
    title       VARCHAR(255) NOT NULL,
    latitude    DOUBLE       NOT NULL,
    longitude   DOUBLE       NOT NULL,
    description VARCHAR(255) NOT NULL,
    type        VARCHAR(255) NOT NULL,
    time_of_day VARCHAR(255) NOT NULL,
    format      VARCHAR(255) NOT NULL
);

create table locations_suitable_colors
(
    location_id INT PRIMARY KEY,
    color_id    INT NOT NULL,
    FOREIGN KEY (location_id) REFERENCES locations (id),
    FOREIGN KEY (color_id) REFERENCES colors (id)
);

create table orders
(
    id      INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    format  VARCHAR(255),
    type    VARCHAR(255),
    status  VARCHAR(255),
    to_pay  DOUBLE,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

create table orders_locations
(
    order_id    INT NOT NULL,
    location_id INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders (id),
    FOREIGN KEY (location_id) REFERENCES locations (id),
    PRIMARY KEY (order_id, location_id)
);

create table user_roles
(
    id   INT PRIMARY KEY AUTO_INCREMENT,
    role VARCHAR(255) NOT NULL
);

create table users_user_roles
(
    user_email   VARCHAR(255) NOT NULL,
    user_role_id INT          NOT NULL,
    FOREIGN KEY (user_email) REFERENCES users (email),
    FOREIGN KEY (user_role_id) REFERENCES user_roles (id),
    PRIMARY KEY (user_email, user_role_id)
);


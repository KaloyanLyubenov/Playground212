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

create table videos
(
    id            INT PRIMARY KEY AUTO_INCREMENT,
    link          VARCHAR(255) NOT NULL,
    media_type_id INT          NOT NULL,
    FOREIGN KEY (media_type_id) REFERENCES media_types (id)
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

create table pictures
(
    id            INT PRIMARY KEY AUTO_INCREMENT,
    name          VARCHAR(255) NOT NULL,
    album_name         VARCHAR(255) NOT NULL,
    owner_id      INT,
    media_type_id INT          NOT NULL,
    FOREIGN KEY (media_type_id) REFERENCES media_types (id),
    FOREIGN KEY (owner_id) REFERENCES users (id)
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
    id             INT PRIMARY KEY AUTO_INCREMENT,
    title          VARCHAR(255)    NOT NULL,
    latitude       DOUBLE          NOT NULL,
    longitude      DOUBLE          NOT NULL,
    description    VARCHAR(255)    NOT NULL,
    thumbnail_url  VARCHAR(255)    NOT NULL,
    media_type_id  INT NOT NULL,
    format_type_id INT NOT NULL,
    FOREIGN KEY (media_type_id) REFERENCES media_types (id),
    FOREIGN KEY (format_type_id) REFERENCES format_types (id)
);

create table locations_suitable_colors
(
    location_id INT PRIMARY KEY,
    color_id    INT NOT NULL,
    FOREIGN KEY (location_id) REFERENCES locations (id),
    FOREIGN KEY (color_id) REFERENCES colors (id)
);

create table statuses
(
    id     INT PRIMARY KEY AUTO_INCREMENT,
    status VARCHAR(255) NOT NULL
);

create table orders
(
    id            INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    phone_number VARCHAR(255),
    format_type_id INT,
    media_type_id INT,
    FOREIGN KEY (format_type_id) REFERENCES format_types (id),
    FOREIGN KEY (media_type_id) REFERENCES media_types (id)
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


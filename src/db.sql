CREATE TABLE users (
                       id SERIAL NOT NULL PRIMARY KEY,
                       user_name VARCHAR(64) NOT NULL,
                       user_email VARCHAR(128) UNIQUE NOT NULL
);

CREATE TABLE posts (
                       id SERIAL NOT NULL PRIMARY KEY,
                       post VARCHAR(255) NOT NULL,
                       user_id BIGINT NOT NULL,
                       CONSTRAINT user_id_fk FOREIGN KEY (user_id) REFERENCES users(id)
)
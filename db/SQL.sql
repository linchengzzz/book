--创建BooksSystem数据库
CREATE SCHEMA `BooksSystem` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;

--创建books表
CREATE TABLE `BooksSystem`.`books` (
  `bookId` INT NOT NULL AUTO_INCREMENT,
  `bookCover` VARCHAR(120) NOT NULL,
  `bookName` VARCHAR(100) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  `bookInfo` VARCHAR(100) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  `bookAuthor` VARCHAR(100) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  `bookPrice` FLOAT NOT NULL DEFAULT 0,
  `bookSearch` INT NOT NULL DEFAULT 0,
  `bookSale` FLOAT NOT NULL DEFAULT 1,
  `bookSold` INT NOT NULL DEFAULT 0,
  `bookType` VARCHAR(20) NOT NULL,
  `bookDate` DATE NOT NULL,
  `bookContent` VARCHAR(500) NULL,
  PRIMARY KEY (`bookId`));

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 09, 2023 at 08:16 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_ecom`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `name` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `phone` int(13) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `message` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  `time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `amt` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `amt`, `user_id`) VALUES
(20, 1350, 10);

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `order_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `product_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`id`, `order_id`, `qty`, `order_time`, `product_id`, `user_id`) VALUES
(1, 20, 1, '2023-10-09 06:10:02', 2, 10);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(5) NOT NULL,
  `productName` varchar(60) NOT NULL,
  `price` int(5) NOT NULL,
  `productImage` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `productName`, `price`, `productImage`) VALUES
(1, 'Engage Femme EDP Perfume Spray for Women\'s 100ml + 3ml Teste', 399, '1.jpg'),
(2, 'Victoria\'s Secret Velvet Petals, 8.4 Oz', 1350, '2.jpg'),
(3, 'Victoria\'s Secret 8.4 Oz Love Addict Fragrance Mist (2015)', 1200, '3.jpg'),
(4, 'Victoria\'s Secret Bombshell Body Mist 2.5oz Travel Size', 4352, '4.jpg'),
(5, 'Secret Temptation Romance Eau De Perfume Spray for Women, 10', 350, '5.jpg'),
(6, 'Bath & Body Works A Thousand Wishes Eau de Parfum 50 ml', 4400, '6.jpg'),
(7, 'Bath & Body Works A Thousand Wishes Eau de Parfum 50 ml', 350, '7.jpg'),
(8, 'Layer\'r Wottagirl Vanilla Twist Fragrant Body Splash for Wom', 440, '8.jpg'),
(9, 'Plum BodyLovin\' Trippin\' Mimosas Body Mist | Long Lasting Ci', 470, '9.jpg'),
(10, 'Yardley London Gentleman Classic Perfume For Men, 100ml', 390, '10.jpg'),
(11, 'Plum Women\'s Body Lovin\' Hawaiian Rumba Eau De Parfum Long L', 190, '11.jpg'),
(12, 'Plum BodyLovin\' Vanilla Vibes Body Mist | Long Lasting Vanil', 330, '12.jpg'),
(13, 'Plum BodyLovin\' Orchid-You-Not Body Mist | Long Lasting Fres', 260, '13.jpg'),
(14, 'Plum BodyLovin\' Hawaiian Rumba Shower Gel | Sulphate-free Bo', 260, '14.jpg'),
(15, 'Engage Fantasia Perfume for Women, Long Lasting, Floral & Sp', 400, '15.jpg'),
(16, 'Engage One Soul Gender-free Perfume, Unisex, Long Lasting, C', 470, '16.jpg'),
(17, 'Wild Stone Ultra Sensual Long Lasting Perfume Spray for Men,', 350, '17.jpg'),
(18, 'Wild Stone Edge Parfum for Men, Long Lasting Refreshing Ever', 300, '18.jpg'),
(19, 'DJOKR Signature Perfume For Men 100 ml | Eau De Parfum | Pre', 500, '19.jpg'),
(20, 'MINISO Blooming Eau De Toilette Long Lasting Women Perfumes,', 310, '20.jpg'),
(21, 'Villain Hydra Perfume (Eau De Parfum) (100 ml)', 410, '21.jpg'),
(22, 'Engage Yang Perfume For Women, Floral and Fruity, Long Lasti', 340, '22.jpg'),
(23, 'Engage Yang Perfume For Women, Floral and Fruity, Long Lasti', 99, '23.jpg'),
(24, 'Beardo Whisky Smoke Bourbon Perfume 50ml & Mariner Perfume 5', 500, '24.jpg'),
(25, 'Body Cupid Luxury Perfume Gift Set For Women 4X20 Ml | Long ', 580, '25.jpg'),
(26, 'OSCAR Blush Perfume For Women | Notes of Musk & Sandalwood |', 100, '26.jpg'),
(27, 'Carlton London Escape Perfume 100 ml | Eau de Parfum for Wom', 560, '27.jpg'),
(28, 'Wild Stone Ammo Eau De Parfum for Men, 100ml|Spicy and Woody', 520, '28.jpg'),
(29, 'Bella Vita Luxury Woman Eau De Parfum Gift Set 4x20 ml for W', 520, '29.jpg'),
(30, 'Beardo Whisky Smoke Perfume for Men, 100ml | Spicy, Woody - ', 420, '30.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user_login`
--

CREATE TABLE `user_login` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone_no` varchar(15) DEFAULT NULL,
  `address` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_login`
--

INSERT INTO `user_login` (`id`, `username`, `email`, `password`, `name`, `phone_no`, `address`) VALUES
(1, 'visesh', 'viseshagarwal@outlook.com', 'visesh123', 'Visesh Agarwal', '7717769254', '1234 Elm St, Bangalore, India'),
(2, 'heer', 'heer@gmail.com', 'undefined', 'Heer Shah', '7454841201', 'bvhhjvhbvgjh'),
(3, 'ramesh', 'ramesh@gmail.com', 'ramesh123', 'Ramesh shah', '7471151515', 'jvbfhbvhfbvhfbvhfb'),
(4, 'Keerthana', 'keerthana@gmail.com', 'visesh123', 'hbfvhbfhbvh', '515151515', 'nchbfhbfh'),
(5, 'newWorld', 'new@gmail.com', 'new123', 'New World', '7465124780', 'new homedbvhbfvhbf'),
(6, 'bhbvhfbv', 'fbhgbh@bfbvhf.jb', 'nvjfbhvf', 'vnfbvhfb', '744515144', 'fhbvhfvfvjh'),
(7, 'ramesh@gmail.comnj', 'nvjfbvnjgb@jnvjbh.jjbh', 'jfvbfhbfjbv', 'nvfjdbvhfbv', '745151514', 'hdbvdvfjbvhjfhvj'),
(8, 'ramesh@gmail.comnj', 'nvjfbvnjgb@jnvjbh.jjbh', 'jfvbfhbfjbv', 'nvfjdbvhfbv', '745151514', 'hdbvdvfjbvhjfhvj'),
(9, 'keerthana', 'keerthanavgvg@gmail.com', 'bfvgfbhbfhvfhb', 'Keerthana h', '848455151', 'jcnhbfbvfbvfhbv'),
(10, 'myName', 'myName@gmail.com', '123456789', 'My Name', '9548484541', 'jbfvhbfhbvfvfvfhv');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_login`
--
ALTER TABLE `user_login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_login`
--
ALTER TABLE `user_login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `order_details_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `order_details_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `order_details_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `user_login` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

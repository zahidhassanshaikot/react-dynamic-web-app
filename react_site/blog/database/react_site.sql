-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 24, 2020 at 05:21 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_site`
--

-- --------------------------------------------------------

--
-- Table structure for table `chart_data`
--

CREATE TABLE `chart_data` (
  `id` int(11) NOT NULL,
  `x_data` varchar(1000) NOT NULL,
  `y_data` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chart_data`
--

INSERT INTO `chart_data` (`id`, `x_data`, `y_data`) VALUES
(1, 'Java', '100'),
(2, 'C#', '50'),
(3, 'PHP', '70'),
(4, 'ASP.net', '80'),
(5, 'Jquery', '66'),
(6, 'React', '55'),
(7, 'Angular', '33'),
(8, 'C++', '10');

-- --------------------------------------------------------

--
-- Table structure for table `client_review`
--

CREATE TABLE `client_review` (
  `id` int(11) NOT NULL,
  `client_img` varchar(1000) NOT NULL,
  `client_title` varchar(1000) NOT NULL,
  `client_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `client_review`
--

INSERT INTO `client_review` (`id`, `client_img`, `client_title`, `client_description`) VALUES
(1, 'https://avatars3.githubusercontent.com/u/20878483?s=400&v=4', 'Web Development', 'I build native and cross platfrom mobile app for your business app for your business'),
(2, 'https://avatars3.githubusercontent.com/u/20878483?s=400&v=4', 'Web Development', 'I build native and cross platfrom mobile app for your business app for your business'),
(3, 'https://avatars3.githubusercontent.com/u/20878483?s=400&v=4', 'Web Development', 'I build native and cross platfrom mobile app for your business app for your business'),
(4, 'https://avatars3.githubusercontent.com/u/20878483?s=400&v=4', 'Web Development', 'I build native and cross platfrom mobile app for your business app for your business');

-- --------------------------------------------------------

--
-- Table structure for table `contact_table`
--

CREATE TABLE `contact_table` (
  `id` int(11) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contact_table`
--

INSERT INTO `contact_table` (`id`, `name`, `email`, `message`) VALUES
(1, 'Shaikot', 'zahid@gmail.com', 'hi hi ho');

-- --------------------------------------------------------

--
-- Table structure for table `course_table`
--

CREATE TABLE `course_table` (
  `id` int(11) NOT NULL,
  `short_title` varchar(1000) NOT NULL,
  `short_description` varchar(1000) NOT NULL,
  `long_title` varchar(1000) NOT NULL,
  `long_des` text NOT NULL,
  `total_lecture` varchar(1000) NOT NULL,
  `total_student` varchar(1000) NOT NULL,
  `skill_all` text NOT NULL,
  `video_url` varchar(1000) NOT NULL,
  `courses_link` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `course_table`
--

INSERT INTO `course_table` (`id`, `short_title`, `short_description`, `long_title`, `long_des`, `total_lecture`, `total_student`, `skill_all`, `video_url`, `courses_link`) VALUES
(1, 'Web Development', 'I build native and cross platfrom mobile app for your business app for your business', 'Full Dynamic Website With Admin Panel', 'I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects', '22', '22', 'Web DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb Development', 'Web Development', 'Web Development'),
(2, 'Web Development', 'I build native and cross platfrom mobile app for your business app for your business', 'Full Dynamic Website With Admin Panel', 'I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects', '22', '22', 'Web DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb Development', 'Web Development', 'Web Development'),
(3, 'Web Development', 'I build native and cross platfrom mobile app for your business app for your business', 'Full Dynamic Website With Admin Panel', 'I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects', '22', '22', 'Web DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb Development', 'Web Development', 'Web Development'),
(4, 'Web Development', 'I build native and cross platfrom mobile app for your business app for your business', 'Full Dynamic Website With Admin Panel', 'I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects', '22', '22', 'Web DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb Development', 'Web Development', 'Web Development'),
(5, 'Web Development', 'I build native and cross platfrom mobile app for your business app for your business', 'Full Dynamic Website With Admin Panel', 'I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects', '22', '22', 'Web DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb Development', 'Web Development', 'Web Development'),
(6, 'Web Development', 'I build native and cross platfrom mobile app for your business app for your business', 'Full Dynamic Website With Admin Panel', 'I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects', '22', '22', 'Web DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb Development', 'Web Development', 'Web Development'),
(7, 'Web Development', 'I build native and cross platfrom mobile app for your business app for your business', 'Full Dynamic Website With Admin Panel', 'I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects', '22', '22', 'Web DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb Development', 'Web Development', 'Web Development');

-- --------------------------------------------------------

--
-- Table structure for table `footer_table`
--

CREATE TABLE `footer_table` (
  `id` int(11) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `phone` varchar(1000) NOT NULL,
  `facebook` varchar(1000) NOT NULL,
  `youtube` varchar(1000) NOT NULL,
  `footer_credit` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `footer_table`
--

INSERT INTO `footer_table` (`id`, `address`, `email`, `phone`, `facebook`, `youtube`, `footer_credit`) VALUES
(1, '#79/6 Padma Residential Aria, 3rd Floor Front Side, Rajshahi', 'demo@gmail.com', ' +880 1000 000 000', 'www.facebook.com', 'www.youtube.com', 'shaikot.com © 2020 2021');

-- --------------------------------------------------------

--
-- Table structure for table `home_etc`
--

CREATE TABLE `home_etc` (
  `id` int(11) NOT NULL,
  `home_title` varchar(1000) NOT NULL,
  `home_subtitle` varchar(1000) NOT NULL,
  `tech_description` text NOT NULL,
  `total_project` int(11) NOT NULL,
  `total_client` int(11) NOT NULL,
  `video_description` text NOT NULL,
  `video_url` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `information_etc`
--

CREATE TABLE `information_etc` (
  `id` int(11) NOT NULL,
  `about` text NOT NULL,
  `refund` text NOT NULL,
  `terms` text NOT NULL,
  `privacy` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `information_etc`
--

INSERT INTO `information_etc` (`id`, `about`, `refund`, `terms`, `privacy`) VALUES
(1, 'I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects', 'I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects', 'I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects', 'I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects');

-- --------------------------------------------------------

--
-- Table structure for table `projects_table`
--

CREATE TABLE `projects_table` (
  `id` int(11) NOT NULL,
  `img_one` varchar(1000) NOT NULL,
  `img_two` varchar(1000) NOT NULL,
  `project_name` varchar(1000) NOT NULL,
  `short_description` varchar(1000) NOT NULL,
  `project_fetures` text NOT NULL,
  `live_preview` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `projects_table`
--

INSERT INTO `projects_table` (`id`, `img_one`, `img_two`, `project_name`, `short_description`, `project_fetures`, `live_preview`) VALUES
(1, 'https://cdn.pixabay.com/photo/2016/01/19/14/50/desk-1148994_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/01/19/14/50/desk-1148994_960_720.jpg', 'Card Title', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 'Unlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category', ''),
(2, 'https://cdn.pixabay.com/photo/2016/01/19/14/50/desk-1148994_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/01/19/14/50/desk-1148994_960_720.jpg', 'Card Title', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 'Unlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category', ''),
(3, 'https://cdn.pixabay.com/photo/2016/01/19/14/50/desk-1148994_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/01/19/14/50/desk-1148994_960_720.jpg', 'Card Title', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 'Unlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category', ''),
(4, 'https://cdn.pixabay.com/photo/2016/01/19/14/50/desk-1148994_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/01/19/14/50/desk-1148994_960_720.jpg', 'Card Title', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 'Unlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category', ''),
(5, 'https://cdn.pixabay.com/photo/2016/01/19/14/50/desk-1148994_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/01/19/14/50/desk-1148994_960_720.jpg', 'Card Title', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 'Unlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category', ''),
(6, 'https://cdn.pixabay.com/photo/2016/01/19/14/50/desk-1148994_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/01/19/14/50/desk-1148994_960_720.jpg', 'Card Title', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 'Unlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category', ''),
(7, 'https://cdn.pixabay.com/photo/2016/01/19/14/50/desk-1148994_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/01/19/14/50/desk-1148994_960_720.jpg', 'Card Title', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 'Unlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category', ''),
(8, 'https://cdn.pixabay.com/photo/2016/01/19/14/50/desk-1148994_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/01/19/14/50/desk-1148994_960_720.jpg', 'Card Title', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 'Unlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category\r\nUnlimited Dynamic Product Category', '');

-- --------------------------------------------------------

--
-- Table structure for table `service_table`
--

CREATE TABLE `service_table` (
  `id` int(11) NOT NULL,
  `service_name` varchar(1000) NOT NULL,
  `service_description` text NOT NULL,
  `service_logo` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `service_table`
--

INSERT INTO `service_table` (`id`, `service_name`, `service_description`, `service_logo`) VALUES
(1, 'Web Development', 'I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.', 'http://localhost:3000/static/media/web.d45e6fbf.svg'),
(2, 'Mobile Development', ' build native and cross platfrom mobile app for your business and instiution as per as your requirements.', 'http://localhost:3000/static/media/mobile.b3cc87c3.svg'),
(3, 'Graphics Design', 'I desing modern user interface and other graphical components for your business and instiution.', 'http://localhost:3000/static/media/graphics.c111184b.svg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chart_data`
--
ALTER TABLE `chart_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `client_review`
--
ALTER TABLE `client_review`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_table`
--
ALTER TABLE `contact_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course_table`
--
ALTER TABLE `course_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `footer_table`
--
ALTER TABLE `footer_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_etc`
--
ALTER TABLE `home_etc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `information_etc`
--
ALTER TABLE `information_etc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects_table`
--
ALTER TABLE `projects_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service_table`
--
ALTER TABLE `service_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chart_data`
--
ALTER TABLE `chart_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `client_review`
--
ALTER TABLE `client_review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `contact_table`
--
ALTER TABLE `contact_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `course_table`
--
ALTER TABLE `course_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `footer_table`
--
ALTER TABLE `footer_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `home_etc`
--
ALTER TABLE `home_etc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `information_etc`
--
ALTER TABLE `information_etc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `projects_table`
--
ALTER TABLE `projects_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `service_table`
--
ALTER TABLE `service_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

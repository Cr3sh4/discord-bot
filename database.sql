-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Янв 07 2021 г., 21:22
-- Версия сервера: 5.5.62-log
-- Версия PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `jma_db`
--

-- --------------------------------------------------------

--
-- Структура таблицы `jma_command_logs`
--

CREATE TABLE `jma_command_logs` (
  `id` bigint(20) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `guild_id` bigint(20) NOT NULL,
  `guild_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `channel_id` bigint(20) NOT NULL,
  `channel_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint(20) NOT NULL,
  `user_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `command` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `args` text COLLATE utf8mb4_unicode_ci,
  `full_message` text COLLATE utf8mb4_unicode_ci,
  `bot_response` text COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `jma_command_logs`
--

INSERT INTO `jma_command_logs` (`id`, `time`, `guild_id`, `guild_name`, `channel_id`, `channel_name`, `user_id`, `user_name`, `command`, `args`, `full_message`, `bot_response`) VALUES
(1, '0000-00-00 00:00:00', 0, NULL, 0, NULL, 0, '', 'Ready', NULL, NULL, ''),
(2, '0000-00-00 00:00:00', 0, NULL, 0, NULL, 0, '', 'Ready', NULL, NULL, ''),
(3, '0000-00-00 00:00:00', 0, NULL, 0, NULL, 0, '', 'Ready', NULL, NULL, ''),
(4, '0000-00-00 00:00:00', 291968284146925578, '????Enterprise Squad????', 685063276950061066, 'bot-test', 252431644684713985, 'THE-PASHKA', 'avatar', '[\"<@!294122131074318337>\"]', '~avatar <@!294122131074318337>', ''),
(5, '2021-01-07 17:39:03', 291968284146925578, '????Enterprise Squad????', 685063276950061066, 'bot-test', 252431644684713985, 'THE-PASHKA', 'avatar', '[\"<@!294122131074318337>\"]', '~avatar <@!294122131074318337>', ''),
(6, '2021-01-07 17:39:09', 291968284146925578, '????Enterprise Squad????', 685063276950061066, 'bot-test', 252431644684713985, 'THE-PASHKA', 'avatar', '[\"<@!252431644684713985>\"]', '~avatar <@!252431644684713985>', ''),
(7, '2021-01-07 17:39:51', 291968284146925578, '????Enterprise Squad????', 685063276950061066, 'bot-test', 252431644684713985, 'THE-PASHKA', 'avatar', '[\"<@!252431644684713985>ъ\"]', '~avatar <@!252431644684713985>ъ', ''),
(8, '2021-01-07 17:40:47', 0, NULL, 0, NULL, 0, '', 'Ready', NULL, NULL, ''),
(9, '2021-01-07 17:41:22', 291968284146925578, '????Enterprise Squad????', 685063276950061066, 'bot-test', 294122131074318337, 'Cr3sh4', 'avatar', '[\"<@!252431644684713985>\"]', '~avatar <@!252431644684713985>', ''),
(10, '2021-01-07 17:41:48', 291968284146925578, '????Enterprise Squad????', 685063276950061066, 'bot-test', 294122131074318337, 'Cr3sh4', 'avatar', '[\"<@!252431644684713985>\"]', '~avatar <@!252431644684713985>', ''),
(11, '2021-01-07 18:07:27', 0, NULL, 0, NULL, 0, '', 'Shutdown', NULL, NULL, NULL),
(12, '2021-01-07 18:07:49', 0, NULL, 0, NULL, 0, '', 'Ready', NULL, NULL, NULL),
(13, '2021-01-07 18:08:10', 291968284146925578, '????Enterprise Squad????', 685063276950061066, 'bot-test', 294122131074318337, 'Cr3sh4', 'meme', '[]', '~meme', NULL),
(14, '2021-01-07 18:12:10', 0, NULL, 0, NULL, 0, '', 'Shutdown', NULL, NULL, 'Stopped!'),
(15, '2021-01-07 18:12:32', 0, NULL, 0, NULL, 0, '', 'Shutdown', NULL, NULL, 'Stopped!'),
(16, '2021-01-07 18:15:20', 0, NULL, 0, NULL, 0, '', 'Ready', NULL, NULL, NULL),
(17, '2021-01-07 18:15:54', 291968284146925578, '????Enterprise Squad????', 291968284146925578, 'chat', 294122131074318337, 'Cr3sh4', 'roll', '[]', '~roll', '53'),
(18, '2021-01-07 18:17:40', 0, NULL, 0, NULL, 0, '', 'Ready', NULL, NULL, NULL),
(19, '2021-01-07 18:17:57', 0, NULL, 0, NULL, 0, '', 'Shutdown', NULL, NULL, 'Stopped!'),
(20, '2021-01-07 18:19:21', 0, NULL, 0, NULL, 0, '', 'Ready', NULL, NULL, NULL),
(21, '2021-01-07 18:19:24', 291968284146925578, '????Enterprise Squad????', 291968284146925578, 'chat', 294122131074318337, 'Cr3sh4', 'roll', '[]', '~roll', '94'),
(22, '2021-01-07 18:19:34', 291968284146925578, '????Enterprise Squad????', 291968284146925578, 'chat', 294122131074318337, 'Cr3sh4', 'roll', '[\"999999\"]', '~roll 999999', '501934');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `jma_command_logs`
--
ALTER TABLE `jma_command_logs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `jma_command_logs`
--
ALTER TABLE `jma_command_logs`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

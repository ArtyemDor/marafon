import replace from "gulp-replace"; // подключаем плагин для замены картинок с @img обратно на правильный путь 
import plumber from "gulp-plumber"; // помогает обработать ошибки при работе с файлами
import notify from "gulp-notify"; // удобно выводит сообщения, в т.ч. об ошибках
import browsersync from "browser-sync"; // локальный сервер
import newer from "gulp-newer"; // Проверка обновлений
import ifPlugin from "gulp-if"; // Условное ветвление


//экспортируем объект
export const plugins = {
   replace: replace,
   plumber: plumber,
   notify: notify,
   browsersync: browsersync,
   newer: newer,
   if: ifPlugin
}
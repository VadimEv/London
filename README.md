# London Evill Edition
Форк форка Касера - дефолтной темы для [Ghost](http://github.com/tryghost/ghost/). Сделана для журналов, блогов и вообще чего угодно. Полностью бесплатна и полностью адаптивна, лицензия MIT.

**Demo: https://ghost.anylight.ru**

&nbsp;



&nbsp;

# Первый раз используете Ghost тему?
Гост использует простой шаблонизатор [Handlebars](http://handlebarsjs.com/) для своих тем.
Тема достаточно хорошо откомментирована в коде, там что будет не сложно понять что и где происходит. Как только комфортно освоитесь с тем что происходит, можно озанкомится с полной документацией [API тем](https://themes.ghost.org) которая полнгостью описывает handlebars и их возможнео использование.

**Главный файлы темы:**

- `default.hbs` - Главный шаблон, все остальные используются надстройкой
- `index.hbs` - Дефолтная домашняя страница
- `post.hbs` - Дефолтная страница для записей
- `page.hbs` - Для индивидуальных страниц (в Госте грань между страницами и записями весьма условна - страницы для статичного содержимого, а-ля контакты, конфиденциальность и прочее   
- `tag.hbs` - шаблон для тэгов
- `author.hbs` - шаблон для записей автора

Тема поддерживает одну клевую фичу - можно делать индивидуальные шаблоны для страница просто добавляя их слаг(ссылку) к имени шаблона. Для примера 

- `page-about.hbs` - Индивидуальный шаблон `/about/` страницы
- `tag-news.hbs` - Индивидуальный шаблон `/tag/news/` архива записей
- `author-ali.hbs` - Индивидуальный шаблон `/author/ali/` записей автора


# Разработка

London styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
$ yarn install
$ yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

```bash
$ yarn zip
```

# PostCSS Features Used

- Autoprefixer - Don't worry about writing browser prefixes of any kind, it's all done automatically with support for the latest 2 major versions of every browser.
- Variables - Simple pure CSS variables
- [Color Function](https://github.com/postcss/postcss-color-function)


# Copyright & License

Copyright (c) 2013-2020 Ghost Foundation и Evill - Released under the [MIT license](LICENSE).

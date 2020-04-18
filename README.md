���� ����� ������ - ��������� ���� ��� Ghost. ������� ��� ��������, ������ � ������ ���� ������. ��������� ��������� � ��������� ���������, �������� MIT.

Demo: https://ghost.anylight.ru

 

 
������ ��� ����������� Ghost ����?

���� ���������� ������� ������������ Handlebars ��� ����� ���. ���� ���������� ������ ���������������� � ����, ��� ��� ����� �� ������ ������ ��� � ��� ����������. ��� ������ ��������� ��������� � ��� ��� ����������, ����� ����������� � ������ ������������� API ��� ������� ���������� ��������� handlebars � �� ��������� �������������.

������� ����� ����:

    default.hbs - ������� ������, ��� ��������� ������������ �����������
    index.hbs - ��������� �������� ��������
    post.hbs - ��������� �������� ��� �������
    page.hbs - ��� �������������� ������� (� ����� ����� ����� ���������� � �������� ������ ������� - �������� ��� ���������� �����������, �-�� ��������, ������������������ � ������
    tag.hbs - ������ ��� �����
    author.hbs - ������ ��� ������� ������

���� ������������ ���� ������ ���� - ����� ������ �������������� ������� ��� �������� ������ �������� �� ����(������) � ����� �������. ��� �������

    page-about.hbs - �������������� ������ /about/ ��������
    tag-news.hbs - �������������� ������ /tag/news/ ������ �������
    author-ali.hbs - �������������� ������ /author/ali/ ������� ������

����������

London styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need Node, Yarn and Gulp installed globally. After that, from the theme's root directory:

$ yarn install
$ yarn dev

Now you can edit /assets/css/ files, which will be compiled to /assets/built/ automatically.

The zip Gulp task packages the theme files into dist/<theme-name>.zip, which you can then upload to your site.

$ yarn zip

PostCSS Features Used

    Autoprefixer - Don't worry about writing browser prefixes of any kind, it's all done automatically with support for the latest 2 major versions of every browser.
    Variables - Simple pure CSS variables
    Color Function

Copyright & License

Copyright (c) 2013-2020 Ghost Foundation � Evill - Released under the MIT license.
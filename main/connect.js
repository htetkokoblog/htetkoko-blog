const blog = angular.module('blog', []);
const token = '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';
const repo = 'htetkokoblog/My-App'; // သင့်ရဲ့ repository
const path = 'api/htetkoko-blog/postdata.json'; // JSON ဖိုင်ရဲ့ လမ်းကြောင်း
const url = `https://api.github.com/repos/${repo}/contents/${path}`;

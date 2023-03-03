var rule = Object.assign(muban.mxpro,{
title:'蓝莓影视',
host:'https://lanmeiguojiang.com',
// url:'/show/fyclass--------fypage---.html',
// url:'/show/fyclass-{{fl.地区}}-{{fl.排序}}-{{fl.剧情}}-{{fl.语言}}-{{fl.字母}}---fypage--{{fl.年份}}.html',
url:'/show/fyclass-fyfilter',
filter_url:'{{fl.地区}}-{{fl.排序}}-{{fl.剧情}}-{{fl.语言}}-{{fl.字母}}---fypage---{{fl.年份}}.html',
filter:{'20': [{'key': '剧情', 'name': '剧情', 'value': [{'n': '全部', 'v': ''}, {'n': '喜剧', 'v': '%E5%96%9C%E5%89%A7'}, {'n': '爱情', 'v': '%E7%88%B1%E6%83%85'}, {'n': '恐怖', 'v': '%E6%81%90%E6%80%96'}, {'n': '动作', 'v': '%E5%8A%A8%E4%BD%9C'}, {'n': '科幻', 'v': '%E7%A7%91%E5%B9%BB'}, {'n': '剧情', 'v': '%E5%89%A7%E6%83%85'}, {'n': '战争', 'v': '%E6%88%98%E4%BA%89'}, {'n': '警匪', 'v': '%E8%AD%A6%E5%8C%AA'}, {'n': '犯罪', 'v': '%E7%8A%AF%E7%BD%AA'}, {'n': '动画', 'v': '%E5%8A%A8%E7%94%BB'}, {'n': '奇幻', 'v': '%E5%A5%87%E5%B9%BB'}, {'n': '武侠', 'v': '%E6%AD%A6%E4%BE%A0'}, {'n': '冒险', 'v': '%E5%86%92%E9%99%A9'}, {'n': '枪战', 'v': '%E6%9E%AA%E6%88%98'}, {'n': '恐怖', 'v': '%E6%81%90%E6%80%96'}, {'n': '悬疑', 'v': '%E6%82%AC%E7%96%91'}, {'n': '惊悚', 'v': '%E6%83%8A%E6%82%9A'}, {'n': '经典', 'v': '%E7%BB%8F%E5%85%B8'}, {'n': '青春', 'v': '%E9%9D%92%E6%98%A5'}, {'n': '文艺', 'v': '%E6%96%87%E8%89%BA'}, {'n': '微电影', 'v': '%E5%BE%AE%E7%94%B5%E5%BD%B1'}, {'n': '古装', 'v': '%E5%8F%A4%E8%A3%85'}, {'n': '历史', 'v': '%E5%8E%86%E5%8F%B2'}, {'n': '运动', 'v': '%E8%BF%90%E5%8A%A8'}, {'n': '农村', 'v': '%E5%86%9C%E6%9D%91'}, {'n': '儿童', 'v': '%E5%84%BF%E7%AB%A5'}, {'n': '网络电影', 'v': '%E7%BD%91%E7%BB%9C%E7%94%B5%E5%BD%B1'}]}, {'key': '地区', 'name': '地区', 'value': [{'n': '全部', 'v': ''}, {'n': '大陆', 'v': '%E5%A4%A7%E9%99%86'}, {'n': '香港', 'v': '%E9%A6%99%E6%B8%AF'}, {'n': '台湾', 'v': '%E5%8F%B0%E6%B9%BE'}, {'n': '美国', 'v': '%E7%BE%8E%E5%9B%BD'}, {'n': '法国', 'v': '%E6%B3%95%E5%9B%BD'}, {'n': '英国', 'v': '%E8%8B%B1%E5%9B%BD'}, {'n': '日本', 'v': '%E6%97%A5%E6%9C%AC'}, {'n': '韩国', 'v': '%E9%9F%A9%E5%9B%BD'}, {'n': '德国', 'v': '%E5%BE%B7%E5%9B%BD'}, {'n': '泰国', 'v': '%E6%B3%B0%E5%9B%BD'}, {'n': '印度', 'v': '%E5%8D%B0%E5%BA%A6'}, {'n': '意大利', 'v': '%E6%84%8F%E5%A4%A7%E5%88%A9'}, {'n': '西班牙', 'v': '%E8%A5%BF%E7%8F%AD%E7%89%99'}, {'n': '加拿大', 'v': '%E5%8A%A0%E6%8B%BF%E5%A4%A7'}, {'n': '其他', 'v': '%E5%85%B6%E4%BB%96'}]}, {'key': '语言', 'name': '语言', 'value': [{'n': '全部', 'v': ''}, {'n': '国语', 'v': '%E5%9B%BD%E8%AF%AD'}, {'n': '英语', 'v': '%E8%8B%B1%E8%AF%AD'}, {'n': '粤语', 'v': '%E7%B2%A4%E8%AF%AD'}, {'n': '闽南语', 'v': '%E9%97%BD%E5%8D%97%E8%AF%AD'}, {'n': '韩语', 'v': '%E9%9F%A9%E8%AF%AD'}, {'n': '日语', 'v': '%E6%97%A5%E8%AF%AD'}, {'n': '法语', 'v': '%E6%B3%95%E8%AF%AD'}, {'n': '德语', 'v': '%E5%BE%B7%E8%AF%AD'}, {'n': '其它', 'v': '%E5%85%B6%E5%AE%83'}]}, {'key': '年份', 'name': '年份', 'value': [{'n': '全部', 'v': ''}, {'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2018', 'v': '2018'}, {'n': '2017', 'v': '2017'}, {'n': '2016', 'v': '2016'}, {'n': '2015', 'v': '2015'}, {'n': '2014', 'v': '2014'}, {'n': '2013', 'v': '2013'}, {'n': '2012', 'v': '2012'}, {'n': '2011', 'v': '2011'}, {'n': '2010', 'v': '2010'}]}, {'key': '字母', 'name': '字母', 'value': [{'n': '字母', 'v': ''}, {'n': 'A', 'v': 'A'}, {'n': 'B', 'v': 'B'}, {'n': 'C', 'v': 'C'}, {'n': 'D', 'v': 'D'}, {'n': 'E', 'v': 'E'}, {'n': 'F', 'v': 'F'}, {'n': 'G', 'v': 'G'}, {'n': 'H', 'v': 'H'}, {'n': 'I', 'v': 'I'}, {'n': 'J', 'v': 'J'}, {'n': 'K', 'v': 'K'}, {'n': 'L', 'v': 'L'}, {'n': 'M', 'v': 'M'}, {'n': 'N', 'v': 'N'}, {'n': 'O', 'v': 'O'}, {'n': 'P', 'v': 'P'}, {'n': 'Q', 'v': 'Q'}, {'n': 'R', 'v': 'R'}, {'n': 'S', 'v': 'S'}, {'n': 'T', 'v': 'T'}, {'n': 'U', 'v': 'U'}, {'n': 'V', 'v': 'V'}, {'n': 'W', 'v': 'W'}, {'n': 'X', 'v': 'X'}, {'n': 'Y', 'v': 'Y'}, {'n': 'Z', 'v': 'Z'}, {'n': '0-9', 'v': '09'}]}, {'key': '排序', 'name': '排序', 'value': [{'n': '时间排序', 'v': 'time'}, {'n': '人气排序', 'v': 'hits'}, {'n': '评分排序', 'v': 'score'}]}], '1': [{'key': '类型', 'name': '类型', 'value': [{'n': '全部', 'v': ''}, {'n': '动作片', 'v': ''}, {'n': '喜剧片', 'v': ''}, {'n': '爱情片', 'v': ''}, {'n': '科幻片', 'v': ''}, {'n': '恐怖片', 'v': ''}, {'n': '剧情片', 'v': ''}, {'n': '战争片', 'v': ''}]}, {'key': '剧情', 'name': '剧情', 'value': [{'n': '全部', 'v': ''}, {'n': '喜剧', 'v': '%E5%96%9C%E5%89%A7'}, {'n': '爱情', 'v': '%E7%88%B1%E6%83%85'}, {'n': '恐怖', 'v': '%E6%81%90%E6%80%96'}, {'n': '动作', 'v': '%E5%8A%A8%E4%BD%9C'}, {'n': '科幻', 'v': '%E7%A7%91%E5%B9%BB'}, {'n': '剧情', 'v': '%E5%89%A7%E6%83%85'}, {'n': '战争', 'v': '%E6%88%98%E4%BA%89'}, {'n': '警匪', 'v': '%E8%AD%A6%E5%8C%AA'}, {'n': '犯罪', 'v': '%E7%8A%AF%E7%BD%AA'}, {'n': '动画', 'v': '%E5%8A%A8%E7%94%BB'}, {'n': '奇幻', 'v': '%E5%A5%87%E5%B9%BB'}, {'n': '武侠', 'v': '%E6%AD%A6%E4%BE%A0'}, {'n': '冒险', 'v': '%E5%86%92%E9%99%A9'}, {'n': '枪战', 'v': '%E6%9E%AA%E6%88%98'}, {'n': '恐怖', 'v': '%E6%81%90%E6%80%96'}, {'n': '悬疑', 'v': '%E6%82%AC%E7%96%91'}, {'n': '惊悚', 'v': '%E6%83%8A%E6%82%9A'}, {'n': '经典', 'v': '%E7%BB%8F%E5%85%B8'}, {'n': '青春', 'v': '%E9%9D%92%E6%98%A5'}, {'n': '文艺', 'v': '%E6%96%87%E8%89%BA'}, {'n': '微电影', 'v': '%E5%BE%AE%E7%94%B5%E5%BD%B1'}, {'n': '古装', 'v': '%E5%8F%A4%E8%A3%85'}, {'n': '历史', 'v': '%E5%8E%86%E5%8F%B2'}, {'n': '运动', 'v': '%E8%BF%90%E5%8A%A8'}, {'n': '农村', 'v': '%E5%86%9C%E6%9D%91'}, {'n': '儿童', 'v': '%E5%84%BF%E7%AB%A5'}, {'n': '网络电影', 'v': '%E7%BD%91%E7%BB%9C%E7%94%B5%E5%BD%B1'}]}, {'key': '地区', 'name': '地区', 'value': [{'n': '全部', 'v': ''}, {'n': '大陆', 'v': '%E5%A4%A7%E9%99%86'}, {'n': '香港', 'v': '%E9%A6%99%E6%B8%AF'}, {'n': '台湾', 'v': '%E5%8F%B0%E6%B9%BE'}, {'n': '美国', 'v': '%E7%BE%8E%E5%9B%BD'}, {'n': '法国', 'v': '%E6%B3%95%E5%9B%BD'}, {'n': '英国', 'v': '%E8%8B%B1%E5%9B%BD'}, {'n': '日本', 'v': '%E6%97%A5%E6%9C%AC'}, {'n': '韩国', 'v': '%E9%9F%A9%E5%9B%BD'}, {'n': '德国', 'v': '%E5%BE%B7%E5%9B%BD'}, {'n': '泰国', 'v': '%E6%B3%B0%E5%9B%BD'}, {'n': '印度', 'v': '%E5%8D%B0%E5%BA%A6'}, {'n': '意大利', 'v': '%E6%84%8F%E5%A4%A7%E5%88%A9'}, {'n': '西班牙', 'v': '%E8%A5%BF%E7%8F%AD%E7%89%99'}, {'n': '加拿大', 'v': '%E5%8A%A0%E6%8B%BF%E5%A4%A7'}, {'n': '其他', 'v': '%E5%85%B6%E4%BB%96'}]}, {'key': '语言', 'name': '语言', 'value': [{'n': '全部', 'v': ''}, {'n': '国语', 'v': '%E5%9B%BD%E8%AF%AD'}, {'n': '英语', 'v': '%E8%8B%B1%E8%AF%AD'}, {'n': '粤语', 'v': '%E7%B2%A4%E8%AF%AD'}, {'n': '闽南语', 'v': '%E9%97%BD%E5%8D%97%E8%AF%AD'}, {'n': '韩语', 'v': '%E9%9F%A9%E8%AF%AD'}, {'n': '日语', 'v': '%E6%97%A5%E8%AF%AD'}, {'n': '法语', 'v': '%E6%B3%95%E8%AF%AD'}, {'n': '德语', 'v': '%E5%BE%B7%E8%AF%AD'}, {'n': '其它', 'v': '%E5%85%B6%E5%AE%83'}]}, {'key': '年份', 'name': '年份', 'value': [{'n': '全部', 'v': ''}, {'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2019', 'v': '2019'}, {'n': '2018', 'v': '2018'}, {'n': '2017', 'v': '2017'}, {'n': '2016', 'v': '2016'}, {'n': '2015', 'v': '2015'}, {'n': '2014', 'v': '2014'}, {'n': '2013', 'v': '2013'}, {'n': '2012', 'v': '2012'}, {'n': '2011', 'v': '2011'}, {'n': '2010', 'v': '2010'}]}, {'key': '字母', 'name': '字母', 'value': [{'n': '字母', 'v': ''}, {'n': 'A', 'v': 'A'}, {'n': 'B', 'v': 'B'}, {'n': 'C', 'v': 'C'}, {'n': 'D', 'v': 'D'}, {'n': 'E', 'v': 'E'}, {'n': 'F', 'v': 'F'}, {'n': 'G', 'v': 'G'}, {'n': 'H', 'v': 'H'}, {'n': 'I', 'v': 'I'}, {'n': 'J', 'v': 'J'}, {'n': 'K', 'v': 'K'}, {'n': 'L', 'v': 'L'}, {'n': 'M', 'v': 'M'}, {'n': 'N', 'v': 'N'}, {'n': 'O', 'v': 'O'}, {'n': 'P', 'v': 'P'}, {'n': 'Q', 'v': 'Q'}, {'n': 'R', 'v': 'R'}, {'n': 'S', 'v': 'S'}, {'n': 'T', 'v': 'T'}, {'n': 'U', 'v': 'U'}, {'n': 'V', 'v': 'V'}, {'n': 'W', 'v': 'W'}, {'n': 'X', 'v': 'X'}, {'n': 'Y', 'v': 'Y'}, {'n': 'Z', 'v': 'Z'}, {'n': '0-9', 'v': '09'}]}, {'key': '排序', 'name': '排序', 'value': [{'n': '时间排序', 'v': 'time'}, {'n': '人气排序', 'v': 'hits'}, {'n': '评分排序', 'v': 'score'}]}], '2': [{'key': '类型', 'name': '类型', 'value': [{'n': '全部', 'v': ''}, {'n': '国产剧', 'v': ''}, {'n': '港台剧', 'v': ''}]}, {'key': '剧情', 'name': '剧情', 'value': [{'n': '全部', 'v': ''}, {'n': '警匪', 'v': '%E8%AD%A6%E5%8C%AA'}, {'n': '都市', 'v': '%E9%83%BD%E5%B8%82'}, {'n': '古装', 'v': '%E5%8F%A4%E8%A3%85'}, {'n': '战争', 'v': '%E6%88%98%E4%BA%89'}, {'n': '青春偶像', 'v': '%E9%9D%92%E6%98%A5%E5%81%B6%E5%83%8F'}, {'n': '喜剧', 'v': '%E5%96%9C%E5%89%A7'}, {'n': '家庭', 'v': '%E5%AE%B6%E5%BA%AD'}, {'n': '犯罪', 'v': '%E7%8A%AF%E7%BD%AA'}, {'n': '动作', 'v': '%E5%8A%A8%E4%BD%9C'}, {'n': '奇幻', 'v': '%E5%A5%87%E5%B9%BB'}, {'n': '剧情', 'v': '%E5%89%A7%E6%83%85'}, {'n': '历史', 'v': '%E5%8E%86%E5%8F%B2'}, {'n': '经典', 'v': '%E7%BB%8F%E5%85%B8'}, {'n': '乡村', 'v': '%E4%B9%A1%E6%9D%91'}, {'n': '情景', 'v': '%E6%83%85%E6%99%AF'}, {'n': '商战', 'v': '%E5%95%86%E6%88%98'}, {'n': '网剧', 'v': '%E7%BD%91%E5%89%A7'}, {'n': '其他', 'v': '%E5%85%B6%E4%BB%96'}]}, {'key': '地区', 'name': '地区', 'value': [{'n': '全部', 'v': ''}, {'n': '内地', 'v': '%E5%86%85%E5%9C%B0'}, {'n': '韩国', 'v': '%E9%9F%A9%E5%9B%BD'}, {'n': '香港', 'v': '%E9%A6%99%E6%B8%AF'}, {'n': '台湾', 'v': '%E5%8F%B0%E6%B9%BE'}, {'n': '日本', 'v': '%E6%97%A5%E6%9C%AC'}, {'n': '美国', 'v': '%E7%BE%8E%E5%9B%BD'}, {'n': '泰国', 'v': '%E6%B3%B0%E5%9B%BD'}, {'n': '英国', 'v': '%E8%8B%B1%E5%9B%BD'}, {'n': '新加坡', 'v': '%E6%96%B0%E5%8A%A0%E5%9D%A1'}, {'n': '其他', 'v': '%E5%85%B6%E4%BB%96'}]}, {'key': '语言', 'name': '语言', 'value': [{'n': '全部', 'v': ''}, {'n': '国语', 'v': '%E5%9B%BD%E8%AF%AD'}, {'n': '英语', 'v': '%E8%8B%B1%E8%AF%AD'}, {'n': '粤语', 'v': '%E7%B2%A4%E8%AF%AD'}, {'n': '闽南语', 'v': '%E9%97%BD%E5%8D%97%E8%AF%AD'}, {'n': '韩语', 'v': '%E9%9F%A9%E8%AF%AD'}, {'n': '日语', 'v': '%E6%97%A5%E8%AF%AD'}, {'n': '其它', 'v': '%E5%85%B6%E5%AE%83'}]}, {'key': '年份', 'name': '年份', 'value': [{'n': '全部', 'v': ''}, {'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2018', 'v': '2018'}, {'n': '2017', 'v': '2017'}, {'n': '2016', 'v': '2016'}, {'n': '2015', 'v': '2015'}, {'n': '2014', 'v': '2014'}, {'n': '2013', 'v': '2013'}, {'n': '2012', 'v': '2012'}, {'n': '2011', 'v': '2011'}, {'n': '2010', 'v': '2010'}]}, {'key': '字母', 'name': '字母', 'value': [{'n': '字母', 'v': ''}, {'n': 'A', 'v': 'A'}, {'n': 'B', 'v': 'B'}, {'n': 'C', 'v': 'C'}, {'n': 'D', 'v': 'D'}, {'n': 'E', 'v': 'E'}, {'n': 'F', 'v': 'F'}, {'n': 'G', 'v': 'G'}, {'n': 'H', 'v': 'H'}, {'n': 'I', 'v': 'I'}, {'n': 'J', 'v': 'J'}, {'n': 'K', 'v': 'K'}, {'n': 'L', 'v': 'L'}, {'n': 'M', 'v': 'M'}, {'n': 'N', 'v': 'N'}, {'n': 'O', 'v': 'O'}, {'n': 'P', 'v': 'P'}, {'n': 'Q', 'v': 'Q'}, {'n': 'R', 'v': 'R'}, {'n': 'S', 'v': 'S'}, {'n': 'T', 'v': 'T'}, {'n': 'U', 'v': 'U'}, {'n': 'V', 'v': 'V'}, {'n': 'W', 'v': 'W'}, {'n': 'X', 'v': 'X'}, {'n': 'Y', 'v': 'Y'}, {'n': 'Z', 'v': 'Z'}, {'n': '0-9', 'v': '09'}]}, {'key': '排序', 'name': '排序', 'value': [{'n': '时间排序', 'v': 'time'}, {'n': '人气排序', 'v': 'hits'}, {'n': '评分排序', 'v': 'score'}]}], '3': [{'key': '剧情', 'name': '剧情', 'value': [{'n': '全部', 'v': ''}, {'n': '选秀', 'v': '%E9%80%89%E7%A7%80'}, {'n': '情感', 'v': '%E6%83%85%E6%84%9F'}, {'n': '访谈', 'v': '%E8%AE%BF%E8%B0%88'}, {'n': '播报', 'v': '%E6%92%AD%E6%8A%A5'}, {'n': '旅游', 'v': '%E6%97%85%E6%B8%B8'}, {'n': '音乐', 'v': '%E9%9F%B3%E4%B9%90'}, {'n': '美食', 'v': '%E7%BE%8E%E9%A3%9F'}, {'n': '纪实', 'v': '%E7%BA%AA%E5%AE%9E'}, {'n': '曲艺', 'v': '%E6%9B%B2%E8%89%BA'}, {'n': '生活', 'v': '%E7%94%9F%E6%B4%BB'}, {'n': '游戏互动', 'v': '%E6%B8%B8%E6%88%8F%E4%BA%92%E5%8A%A8'}, {'n': '财经', 'v': '%E8%B4%A2%E7%BB%8F'}, {'n': '求职', 'v': '%E6%B1%82%E8%81%8C'}]}, {'key': '地区', 'name': '地区', 'value': [{'n': '全部', 'v': ''}, {'n': '内地', 'v': '%E5%86%85%E5%9C%B0'}, {'n': '港台', 'v': '%E6%B8%AF%E5%8F%B0'}, {'n': '日韩', 'v': '%E6%97%A5%E9%9F%A9'}, {'n': '欧美', 'v': '%E6%AC%A7%E7%BE%8E'}]}, {'key': '语言', 'name': '语言', 'value': [{'n': '全部', 'v': ''}, {'n': '国语', 'v': '%E5%9B%BD%E8%AF%AD'}, {'n': '英语', 'v': '%E8%8B%B1%E8%AF%AD'}, {'n': '粤语', 'v': '%E7%B2%A4%E8%AF%AD'}, {'n': '闽南语', 'v': '%E9%97%BD%E5%8D%97%E8%AF%AD'}, {'n': '韩语', 'v': '%E9%9F%A9%E8%AF%AD'}, {'n': '日语', 'v': '%E6%97%A5%E8%AF%AD'}, {'n': '其它', 'v': '%E5%85%B6%E5%AE%83'}]}, {'key': '年份', 'name': '年份', 'value': [{'n': '全部', 'v': ''}, {'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2018', 'v': '2018'}, {'n': '2017', 'v': '2017'}, {'n': '2016', 'v': '2016'}, {'n': '2015', 'v': '2015'}, {'n': '2014', 'v': '2014'}, {'n': '2013', 'v': '2013'}, {'n': '2012', 'v': '2012'}, {'n': '2011', 'v': '2011'}, {'n': '2010', 'v': '2010'}]}, {'key': '字母', 'name': '字母', 'value': [{'n': '字母', 'v': ''}, {'n': 'A', 'v': 'A'}, {'n': 'B', 'v': 'B'}, {'n': 'C', 'v': 'C'}, {'n': 'D', 'v': 'D'}, {'n': 'E', 'v': 'E'}, {'n': 'F', 'v': 'F'}, {'n': 'G', 'v': 'G'}, {'n': 'H', 'v': 'H'}, {'n': 'I', 'v': 'I'}, {'n': 'J', 'v': 'J'}, {'n': 'K', 'v': 'K'}, {'n': 'L', 'v': 'L'}, {'n': 'M', 'v': 'M'}, {'n': 'N', 'v': 'N'}, {'n': 'O', 'v': 'O'}, {'n': 'P', 'v': 'P'}, {'n': 'Q', 'v': 'Q'}, {'n': 'R', 'v': 'R'}, {'n': 'S', 'v': 'S'}, {'n': 'T', 'v': 'T'}, {'n': 'U', 'v': 'U'}, {'n': 'V', 'v': 'V'}, {'n': 'W', 'v': 'W'}, {'n': 'X', 'v': 'X'}, {'n': 'Y', 'v': 'Y'}, {'n': 'Z', 'v': 'Z'}, {'n': '0-9', 'v': '09'}]}, {'key': '排序', 'name': '排序', 'value': [{'n': '时间排序', 'v': 'time'}, {'n': '人气排序', 'v': 'hits'}, {'n': '评分排序', 'v': 'score'}]}], '4': [{'key': '剧情', 'name': '剧情', 'value': [{'n': '全部', 'v': ''}, {'n': '情感', 'v': '%E6%83%85%E6%84%9F'}, {'n': '科幻', 'v': '%E7%A7%91%E5%B9%BB'}, {'n': '热血', 'v': '%E7%83%AD%E8%A1%80'}, {'n': '推理', 'v': '%E6%8E%A8%E7%90%86'}, {'n': '搞笑', 'v': '%E6%90%9E%E7%AC%91'}, {'n': '冒险', 'v': '%E5%86%92%E9%99%A9'}, {'n': '萝莉', 'v': '%E8%90%9D%E8%8E%89'}, {'n': '校园', 'v': '%E6%A0%A1%E5%9B%AD'}, {'n': '动作', 'v': '%E5%8A%A8%E4%BD%9C'}, {'n': '机战', 'v': '%E6%9C%BA%E6%88%98'}, {'n': '运动', 'v': '%E8%BF%90%E5%8A%A8'}, {'n': '战争', 'v': '%E6%88%98%E4%BA%89'}, {'n': '少年', 'v': '%E5%B0%91%E5%B9%B4'}, {'n': '少女', 'v': '%E5%B0%91%E5%A5%B3'}, {'n': '社会', 'v': '%E7%A4%BE%E4%BC%9A'}, {'n': '原创', 'v': '%E5%8E%9F%E5%88%9B'}, {'n': '亲子', 'v': '%E4%BA%B2%E5%AD%90'}, {'n': '益智', 'v': '%E7%9B%8A%E6%99%BA'}, {'n': '励志', 'v': '%E5%8A%B1%E5%BF%97'}, {'n': '其他', 'v': '%E5%85%B6%E4%BB%96'}]}, {'key': '地区', 'name': '地区', 'value': [{'n': '全部', 'v': ''}, {'n': '国产', 'v': '%E5%9B%BD%E4%BA%A7'}, {'n': '日本', 'v': '%E6%97%A5%E6%9C%AC'}, {'n': '欧美', 'v': '%E6%AC%A7%E7%BE%8E'}, {'n': '其他', 'v': '%E5%85%B6%E4%BB%96'}]}, {'key': '语言', 'name': '语言', 'value': [{'n': '全部', 'v': ''}, {'n': '国语', 'v': '%E5%9B%BD%E8%AF%AD'}, {'n': '英语', 'v': '%E8%8B%B1%E8%AF%AD'}, {'n': '粤语', 'v': '%E7%B2%A4%E8%AF%AD'}, {'n': '闽南语', 'v': '%E9%97%BD%E5%8D%97%E8%AF%AD'}, {'n': '韩语', 'v': '%E9%9F%A9%E8%AF%AD'}, {'n': '日语', 'v': '%E6%97%A5%E8%AF%AD'}, {'n': '其它', 'v': '%E5%85%B6%E5%AE%83'}]}, {'key': '年份', 'name': '年份', 'value': [{'n': '全部', 'v': ''}, {'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2018', 'v': '2018'}, {'n': '2017', 'v': '2017'}, {'n': '2016', 'v': '2016'}, {'n': '2015', 'v': '2015'}, {'n': '2014', 'v': '2014'}, {'n': '2013', 'v': '2013'}, {'n': '2012', 'v': '2012'}, {'n': '2011', 'v': '2011'}, {'n': '2010', 'v': '2010'}]}, {'key': '字母', 'name': '字母', 'value': [{'n': '字母', 'v': ''}, {'n': 'A', 'v': 'A'}, {'n': 'B', 'v': 'B'}, {'n': 'C', 'v': 'C'}, {'n': 'D', 'v': 'D'}, {'n': 'E', 'v': 'E'}, {'n': 'F', 'v': 'F'}, {'n': 'G', 'v': 'G'}, {'n': 'H', 'v': 'H'}, {'n': 'I', 'v': 'I'}, {'n': 'J', 'v': 'J'}, {'n': 'K', 'v': 'K'}, {'n': 'L', 'v': 'L'}, {'n': 'M', 'v': 'M'}, {'n': 'N', 'v': 'N'}, {'n': 'O', 'v': 'O'}, {'n': 'P', 'v': 'P'}, {'n': 'Q', 'v': 'Q'}, {'n': 'R', 'v': 'R'}, {'n': 'S', 'v': 'S'}, {'n': 'T', 'v': 'T'}, {'n': 'U', 'v': 'U'}, {'n': 'V', 'v': 'V'}, {'n': 'W', 'v': 'W'}, {'n': 'X', 'v': 'X'}, {'n': 'Y', 'v': 'Y'}, {'n': 'Z', 'v': 'Z'}, {'n': '0-9', 'v': '09'}]}, {'key': '排序', 'name': '排序', 'value': [{'n': '时间排序', 'v': 'time'}, {'n': '人气排序', 'v': 'hits'}, {'n': '评分排序', 'v': 'score'}]}], '23': [{'key': '字母', 'name': '字母', 'value': [{'n': '字母', 'v': ''}, {'n': 'A', 'v': 'A'}, {'n': 'B', 'v': 'B'}, {'n': 'C', 'v': 'C'}, {'n': 'D', 'v': 'D'}, {'n': 'E', 'v': 'E'}, {'n': 'F', 'v': 'F'}, {'n': 'G', 'v': 'G'}, {'n': 'H', 'v': 'H'}, {'n': 'I', 'v': 'I'}, {'n': 'J', 'v': 'J'}, {'n': 'K', 'v': 'K'}, {'n': 'L', 'v': 'L'}, {'n': 'M', 'v': 'M'}, {'n': 'N', 'v': 'N'}, {'n': 'O', 'v': 'O'}, {'n': 'P', 'v': 'P'}, {'n': 'Q', 'v': 'Q'}, {'n': 'R', 'v': 'R'}, {'n': 'S', 'v': 'S'}, {'n': 'T', 'v': 'T'}, {'n': 'U', 'v': 'U'}, {'n': 'V', 'v': 'V'}, {'n': 'W', 'v': 'W'}, {'n': 'X', 'v': 'X'}, {'n': 'Y', 'v': 'Y'}, {'n': 'Z', 'v': 'Z'}, {'n': '0-9', 'v': '09'}]}, {'key': '排序', 'name': '排序', 'value': [{'n': '时间排序', 'v': 'time'}, {'n': '人气排序', 'v': 'hits'}, {'n': '评分排序', 'v': 'score'}]}]},
searchUrl:'/search/**-fypage.html',
class_parse:'.navbar-items li:gt(1):lt(8);a&&Text;a&&href;/(\\d+).html',
lazy:'js:var MY_HOME="http://lanmeiguojiang.com:5244/d/%E8%93%9D%E8%8E%93%E4%BA%91%E7%9B%98";let html=fetch(input,fetch_params);var player=JSON.parse(html.match(/r player_.*?=(.*?)</)[1]);var jsurl=player.url;var from=player.from;if(player.encrypt=="1"){var jsurl=unescape(jsurl)}else if(player.encrypt=="2"){var jsurl=unescape(base64Decode(jsurl))}else{jsurl}if(/ddzy|duoduo/.test(from)){let mx=true;if(mx){let new_obj=JSON.parse(JSON.stringify(fetch_params));delete new_obj.headers["Referer"];let html=request(MY_HOME+"/pzwj.js",new_obj);eval(html);var jx=MacPlayerConfig.player_list[from].parse;print("第1次多多解析:",jx);fetch_params.headers["Referer"]="https://www.pipipao.com/";eval(fetch(jx+jsurl,fetch_params).match(/var config = {[\\s\\S]*?}/)[0]);jx=jx.replace("?url=","");eval(fetch(jx+"js/decode.js",fetch_params));jxk=fetch(jx+"js/setting.js",fetch_params).split(",");jx+="555tZ4pvzHE3BpiO838.php";print("第2次多多解析:",jx);config.tm=(new Date).getTime();config.sign="F4penExTGogdt6U8";input=getVideoInfo(JSON.parse(fetch(buildUrl(jx,config),fetch_params)).url)}}else if(from==="ziqie"){let jxurl="https://lanmeiguojiang.com/dd/?url="+jsurl;input=maoss(jxurl,jxurl,"A42EAC0C2B408472")}',
});

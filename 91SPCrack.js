/*
 *
 *
脚本功能：91视频解锁会员
软件版本：5.1.1
下载地址：https://shrtm.nu/bssp
脚本作者：Hausd0rff
更新时间：2021.11.18
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

# 91视频解锁会员
^https?:\/\/ap\w{1}\.(weilaixushi|orientlion|qdjdswkj)\.com\/m_user\/info url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/91SPCrack.js
^https?:\/\/.*\/common\/splash_config url reject-200

[mitm] 

hostname = app.weilaixushi.com, api.orientlion.com, app.qdjdswkj.com
*
*
*/


var body = $response.body;
    
    body = "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";

$done({body});

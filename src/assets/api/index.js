/*
 * @Author: zhouchunchun 316581172@qq.com
 * @Date: 2023-05-05 16:42:04
 * @LastEditors: why 2594258643@qq.com
 * @LastEditTime: 2023-05-08 13:38:21
 * @FilePath: \apid:\vscode\vue-project\demo\src\assets\api\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import {post} from "./http"
export const aaa = (data)=>post(`http://127.0.0.1:4523/m2/2684592-0-default/79667663`,data)

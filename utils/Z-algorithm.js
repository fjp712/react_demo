/*
**用于字符串的子字符串的搜查
**
*/
export const Z_algorithm=function (string) {
    let z_values=[]
    string.forEach((item,index)=>{
        if(item===string[0]){
            let n=0;
            while (string[index+n]===string[n]){n++;}
            z_values.push({idnex:index,value:n})//计算相应的z_box的z_values
        }
        else
            z_values.push({index:index,value:0})
    })

}//朴素方式的实现

/**
 *
 * @param string
 * @returns {[]}
 * @constructor
 * 解析：
 * 1.为什么使用z_values[i-l]代替z_values[i]？
 * 因为字符串如果是z_box的话string[l...r]和s[0...k-l]两个字符串相等，而且匹配的都是从头开始的字符串q
 */
export const Z_algorithmplus=function (string) {
    let z_values=[]
    for(let i=1,l=0,r=0;i<string.length;i++){
        if(i<=r) z_values[i]=Math.min(z_values[i-l],r-i+1)
        while(i+z_values[i]<n&&string[z_values[i]]===string[z_values[i]+i])
        z_values[i]++;
        if(i>r) {l=i;r=i+z_values[i]-1}
    }
    return z_values
}




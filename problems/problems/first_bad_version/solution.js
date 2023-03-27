/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        const fl = n;
        // console.log('fl: ', fl);
        if(n===1) return 1;
        // for(let i = 1; i <= n; i++ ){ 
        //     console.log(`Is ${i} bad? -  `, isBadVersion(i))
        // }

        const find = (start, finish) => {
            
            // console.log('start: ', start);
            // console.log('finish: ', finish);
            if(start === finish) return start;
            if((finish - start) === 1) {
                if(!isBadVersion(start)) {
                    return finish;
                } else {
                    return start;
                }
            }

            let mid = Math.floor((finish + start) / 2);

            // console.log('mid: ', mid);
            
            let midIsBad = isBadVersion(mid);
            // console.log('midIsBad: ', midIsBad);
            if(midIsBad) {
                return find(start, mid);
            } else {
                return find(mid, fl);
            }
        }

        return find(1, fl);
    };
};



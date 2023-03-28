/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let oldColor = image[sr][sc];
    
    const fill = (x, y) => {
        // console.log('loop')
        // console.log('oldColor: ', oldColor)
        if(x < 0 
            || y < 0 
            || x >= image.length 
            || y >= image[0].length
            || image[x][y] !== oldColor
            || image[x][y] === color) {
            return;
        }
        image[x][y] = color;

        fill(x-1, y);
        fill(x+1, y);
        fill(x, y-1);
        fill(x, y+1);
    }

    fill(sr, sc);

    return image;
};
//export const isBrowser = typeof window !== 'undefined';

export const isBrowser = (callback)=>{
    if(typeof window !== 'undefined'){
        return callback(window);
    }
}
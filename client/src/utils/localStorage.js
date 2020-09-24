// Create a hook to track page visits around the site. At first it may reset each time a new page is visited. Try to implement logic so it keeps the page views number after close the window and returning. Also implement a function that can that will reset the page views (this can be linked to a button). Lastly create a hook that will keep the username of a logged in user and update the document.title when one logs in and is set to a default message like ‘Welcome’ or your fake title when not logged in or after signing out.
// And to extend this task to make it more like state. A text element should say the user’s username on every page they visit when logged it.




odule.exports = {
    get: (key, initVal) => {
        const saved = JSON.parse(localStorage.getItem(key));  

        if (saved !== undefined && saved !== null ) return saved 

        return initVal
    },  

    set: (key, val) => {
    localStorage.setItem(key,val)
    }
    
    
}

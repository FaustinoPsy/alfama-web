/*
    Load-Page V 1.0.0
    License: MIT
    By Lucas Santos
    Git: https://github.com/lucas123ho
*/

function LoadPage(configs){

    this.delay = configs.delay ? Number(configs.delay) * 1000 : 2000
    this.loadingPage = configs.loadingPage ? element(configs.loadingPage) : element("#loadingPage")
    this.loadedPage = configs.loadedPage ? element(configs.loadedPage) : element("#content")
    this.titlePage = configs.titlePage ? configs.titlePage : "Loading..."
    this.oldTitlePage = element("title").innerHTML

    this.init = function(){
        document.body.style.margin = "0"
        document.body.style.padding = "0"

        this.loadedPage.style.zindex = -1

        this.loadingPage.style.opacity = 1
        this.loadingPage.style.display = "flex"
        this.loadedPage.style.flexDirection = "column"
        this.loadingPage.style.justifyContent = "center"
        this.loadingPage.style.alignItems = "center"
        this.loadingPage.style.width = "100vw"
        this.loadingPage.style.height = "100vh"
        this.loadingPage.style.position = "fixed"
        this.loadingPage.style.background = "linear-gradient(to right, #f83600 0%, #f9d423 100%)" 
        this.loadingPage.style.color = "white"
        this.loadingPage.style.top = "0"
        this.loadingPage.style.transition = "all 0.7s ease-in-out"
            
        this.effectLoading(this.loadingPage, this.loadedPage) 
    }

    this.effectLoading = function(loadingPage, loadedPage){
        window.onload = () => {

            element("title").innerHTML = this.titlePage

            delayed(this.delay, () => {
                loadingPage.style.opacity = "0" 
                delayed(500, () => {
                    element("title").innerHTML = this.oldTitlePage
                    loadingPage.style.display = "none"
                })
            })
        }
    }

    function element(identification){
        return document.querySelector(identification)
    }

    function delayed(time, callback){
        setTimeout(callback, time)
    }
    
}
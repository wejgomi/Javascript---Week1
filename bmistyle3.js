#myDiv {
    width:280px;
    height:200px;
    background-image:url(http://www.cnetfrance.fr/i/edit/2013/06/39791275/620x465/ios-7.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}
#effect{
    display:none;
    width:100%;
    height:150px;
    background-image:url(http://www.cnetfrance.fr/i/edit/2013/06/39791275/620x465/ios-7.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}
#color{
    display:none;
    width:100%;
    height:150px;
    background-color:lightblue;
}
#myDiv:hover #effect {
    display:block;
    -webkit-filter: blur(20px);
    -moz-filter: blur(15px);
    -o-filter: blur(15px);
    -ms-filter: blur(15px);
    filter: blur(15px);
    opacity: 0.95;
}
#myDiv:hover #color {
    display:block;
}

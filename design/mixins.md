This document contains list of mixins with there usage of them.

1.  flex-container
2.  flex-direction
3.  flex-wrap
4.  flex-flow
5.  justify-content
6.  align-content
7.  align-items
8.  align-self
9.  order
10. flex-grow 
11. flex-shrink
12. flex-basis


1.  flex-container - support to cross-browser 'display: flex' property.
  
2.  flex-direction - support to cross-browser 'flex-direction: <value>' property.
  
3.  flex-wrap - support to cross-browser 'flex-wrap: <value>' property.
  
4.  flex-flow - support to cross-browser 'flex-flow: <value>' property.
  
5.  justify-content - support to cross-browser 'flex-content: <value>' property.
  
6.  align-content - support to cross-browser 'align-content: <value>' property.
  
7.  align-items - support to cross-browser 'align-items: <value>' property.
  
8.  align-self - support to cross-browser 'align-self: <value>' property.
  
9.  order - support to cross-browser 'order: <value>' property.
 
10. flex-grow - support to cross-browser 'flex-grow: <value>' property.

11. flex-shrink - support to cross-browser 'flex-shrink: <value>' property. 

12. flex-basis - support to cross-browser 'flex-basis: <value>' property. 
  
  *****Sample use case of mixin*****

@import "C:/Users/abhisheksingh75/Desktop/PROSO/SCSS/_mixins.scss";  //Mixin file path--will change according to system

.flex-container{
 @include flex_container;
 @include justify-content(space-around);
 @include flex-flow(row wrap);
 }
 
 //In this case we are calling three mixins in SCSS file after compiling into CSS it will look like this
 
 .flex-container {
  display: -webkit-box;
  /* OLD - iOS  */
  display: -moz-box;
  /* OLD - Firefox*/
  display: -ms-flexbox;
  /* IE 10 */
  display: -webkit-flex;
  /* NEW - Chrome */
  display: flex;
  /* NEW- opera, Firefox */
  -webkit-justify-content: space-around;
  -moz-justify-content: space-around;
  -ms-justify-content: space-around;
  justify-content: space-around;
  -ms-flex-pack: space-around;
  -webkit-flex-flow: row wrap;
  -moz-flex-flow: row wrap;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
}
**********************************


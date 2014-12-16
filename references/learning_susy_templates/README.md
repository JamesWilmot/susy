
# TOC
1. Center Alignment Grid 
2. Daniel Simons
3. Elastica
4. Envato Marketplace
5. Foundation-Grid
6. Foundation-Realty
7. Foundation-Store
8. Foundation-Workspace
9. Marber
10. Mixpanel Blog
11. Multiple layouts & Multiple breakpoints 
12. Newsweek
13. Non-responsive
14. P53 
15. Self-Correcting-Grids
16. Self-Correcting-Grids(Isolated Version) - Catch this one if you missed everything else! 
17. Off Canvas Layout (Coming Soon)
18. ...
19. ...
20. ...

## Center Alignment Grid 

Centers Susy items in the middle of the grid at all times. If more items are added, these items are all positioned in the center as well. 

Techniques used: 

- Inline-block and Text-align: center; 

Suitable Gutter-Positions: 

- Inside 
- Split 

Layout Inspired by Ricardo's question

## Daniel Simons

Large images and 0 gutters are used in this layout to create modern looking grids that are quite popular. 

Techniques used: 
- Isolate Mixin 
- Min-width to Prevent Responsiveness 
- Change in Gutter Ratio

Suitable Gutter Positions: 

- Any 

Layout inspired by https://dribbble.com/shots/1614368-Daniel-Simon-Website/attachments/250787

## Elastica 

Admin dashboard that uses squares for Susy layouts and has a fixed navigation bar at the side. 

Techniques used: 

- Min-Width to Prevent Responsiveness 
- Padding-bottom Trick to Create Squares 
- Offset Container 

Suitable Gutter Positions:

- Any 

Layout inspired by https://dribbble.com/shots/1442141-Elastica-Dashboard/attachments/212746

## Envato Marketplace 

A layout modeled after the Envato Marketplace. Layouts are made complicated slightly to use different number of columns at different breakpoints. 

Techniques used: 

- Changes in Number of Columns in Every Breakpoint

Suitable Gutter Positions: 

-Any 

This layout is inspired by http://market.envato.com/

## Foundation Grid 

This layout is modeled after the Foundation Grid template, grid, and shows you different possibilites for the grid layout. This grid uses nth-childs to create the different grids instead of relying on class names 

Techniques used: 

- Nth-child Selectors 

Suitable Gutter Positions: 

- Any 

Layout inspired by http://foundation.zurb.com/templates/grid.html

## Foundation Realty 

This layout is modeled after the Foundation grid template, realty. It shows you how to add / remove sidebars at different breakpoints and explores how you can use gutter-position: inside properly with the `nest` keyword. 

Techniques used: 

- Nesting for Inside and Split Layouts. 

Suitable Gutter Positions: 

- Inside 
- Split 

Layout inspired by http://foundation.zurb.com/templates/realty.html

## Foundation Store 

This layout is modeled after the Foundation grid template, store. It uses only two breakpoints and shows your how you can effectively reposition some elements from top-bottom into left-right positions. Have a look at the logo image area to see what I mean. 

The Gutter ratio is also changed to create a more pleasant looking layout

Techniques: 

- Change in Gutter Ratio

Suitable Gutter Positions: 

- Before 
- After 

Layout inspired by http://foundation.zurb.com/templates/store.html

## Foundation Workspace 

This also uses the span mixin instead of galleries to create the store grids, so you have an understanding on how to use floats instead of isolates.

Techniques: 

- Spans for galleries 

Layout inspired by http://foundation.zurb.com/templates/workspace.html

## Marber 

This layout is an example of an asymmetric grid that contains 3 different breakpoints. Its however, much simpler than the one we went through in Chapter 13 because it doesn't require the use of multiple nested grids. 

Techniques: 

- Asymmetric Layout 
- Change in Gutter Ratio

Suitable Gutter Positions: 

- Before
- After
- Inside 

Layout is inspired by https://gridsetapp.com/specs/marber/

## Mixpanel Blog 

The Mixpanel blog is an incredibly good example for a static grid that has a unique appearance. 

The grid items are of two different sizes and they appear in a certain pattern throughout the page. In this layout, we use the nth-child selector to make the layout without relying on sever-side language or javascript to add the additional `double` class that was required in the actual site. 

Techniques: 

- Nth-child Selectors
- Sticky header 
- Static Grid
- Changes in Number of Columns in Every Breakpoint

Suitable Gutter Positions: 

- Before
- After
- Split 

Layout inspired by https://mixpanel.com/blog/

## Multiple-Grids

This layout has multiple grids at multiple breakpoints. Some of the grid items are also hidden away. 

Techniques: 

- Changes in Number of Columns in Every Breakpoint

Suitable Gutter Positions: 

- Any 

Layout inspired by http://brazilfourteen.com

## Newsweek 

This layout models after the Newsweek website and has a simple Content - Sidebar layout. There is one additional layer of nesting within content can be used to create different layouts. This shows how a real website might look like with Susy grids. 

Techniques: 

- NA 

Suitable Gutter Positions: 

- Any 

Layout inspired by http://www.newsweek.com/

## Non-responsive 

As its name suggest, this website is not responsive at all. This is a good template to view if you have to create non responsive websites, but want to rely on Susy to do it. 

Techniques: 

- Min-width to Prevent Responsiveness 

Suitable Gutter Positions: 

- Any

## P53 

This layout is remodeled after the P53 website and it uses bootstrap techniques heavily on the layout. This is a good layout to look at if you're trying to shift from Bootstrap to Susy. 

Take note of how the middle `projects` section can be coded with nth-child selectors instead of relying on using grid classes on the HTML Markup. 

Techniques: 

- Nth-child Selectors 

Suitable Gutter Positions: 

- Inside

Layout inspired by http://www.p53.co.uk

## Self Correcting Grids 

Self Correcting Grids are kind of grids that are superb when you have a gallery of items, but are unsure whether the total number of items will fit nicely onto your grid. These grids expand the final item to a correct proportion that will ensure that you layouts fit nicely. 

Its tough to explain, check it out :) 

Techniques: 

- Nth-child Selector 
- Self Correcting Grids

Suitable Gutter Positions 

- Split 
- Inside

Layout inspired by http://codepen.io/heydon/pen/bcdrl

## Self Correcting Grids (Isolate)

If you loved the above self correcting grids, you'll love this even more. This uses the isolate technique combined with the self correcting grids technique to create perfect grids layouts that are (1) not prone to subpixel rounding and (2) automatically corrects itself! 

Definitely check this one out :) 

Techniques: 

- Nth-child Selector
- Self Correcting Grids

Suitable Gutter Positions: 

- Before
- After
- Inside 

Layout inspired by http://codepen.io/heydon/pen/bcdrl

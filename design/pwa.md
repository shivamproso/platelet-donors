## Platelet Donors Front-end Design

### Design considerations -

1. The home page should load fast. Given that there are videos in it, this is a challenge. According to the lighthouse report, plateletdonors' current speed index is 9.5s, which isn't great. More on speed index here - https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index
2. Major areas of improvement appear to be unblocking painting by deferring loading of all non-critical resources, removing unused resources. Especially bootstrap size and blocking call is causing a 3 seconds delay.
3. Building complete site as AMP is not possible since the signup form needs JS for interaction and AMP does not permit any custom JS.
4. First possible pattern is to start with a PWA with embedded AMP content for a fast first-visit experience. Since the signup form resides on the home page, it is important for it to load fast. However, given the design of the home page, this will be non-trivial. We will end up loading several pieces of the site by AMP (the video separately, followed by the 2nd video, the image etc) and whether that will make things faster is questionable. In context is this page - http://plateletdonors.org
5. Second possible pattern is to go completely PWA for now and introduce AMP embedded components only if the speed index does not get better with the other cleanups (CSS optimization, GZIP content, making content async).


### Decisions -
1. Since we need custom interaction on the signup form, we will start with a PWA shell that will allow a custom script.
2. The header markup, footer markup, service worker and the JS file will form the app shell.
3. Everything else will be served as a partial route by the custom-built lightweight router.
4. The JS file will have methods that handle signup zipcode form input and make suggestions, autofill address based on location.


### Work Items -

1. Build a custom router that allows registering routes and calls the handler given a URL request. Should internally use the History API.
2. Build all the page partials markup with lightweight grid layout.
3. Add service worker config to intercept and cache static assets and routes.
4. Use simple form submits instead of XHRs to submit signup form, unsubscribe, change password and forgot password.


### Future -

1. Create AMP components and embed them using Shadow DOM like suggested here - https://www.ampproject.org/docs/integration/pwa-amp

2. Push notifications integration for platelet donation need / donation feedback using the Push API / Notifications API - https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications

3. Figuring out first load experience when the user is offline. Since we have only included the header and footer in the app shell, only they will show if the user is offline. Worth considering if we can show some other static content - maybe the news marquee and the text below it, add fb feed etc.

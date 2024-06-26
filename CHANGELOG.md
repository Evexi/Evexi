# 3.0.2
* [IMPROVEMENT] [BREAKING] `Evexi.proxy` method now supports a generic for the .json response from the API. Semi breaking change as we are moving from `any` type to `unknown` on the method. If you want `any` please use `Evexi.proxy<any>('url')`.

# 3.0.1
* [IMPROVEMENT] Includes the API version within the license making it easier to work out what API version customers are using

# 3.0.0
* [FEATURE] Introduces change listener for env variables.
* [FEATURE] Playing and stopping as callback events
* [FEATURE] Introduce Square web hook events
* [IMPROVEMENT] Improvement to documentation. Adding @since and @deprecated to methods
* [BUG] Proxy mock was rejecting if there is no body/json .. This is not how the player works, it will only be false if we cant talk to the proxy itself

# 2.9.2
* [IMPROVEMENT] ReceiptGenerator helper now supports text wrapping on the `streach()` method. Documented that methods on this class can throw an error

# 2.9.1
* [IMPROVEMENT] ReceiptGenerator helper now supports text wrapping on .left, .right, .streach, .centre and .fill methods. It will force break for words longer then 42 characters and word break for longer sentences.
* [BUG] Some development services for live refreshing the broweser send window events wtihout data causing e.data to throw. This patch release early returns this preventing any development errors (reactJS)

# 2.9.0-alpha.1
* [FEATURE] Add in nexmosphere docs and examples

# 2.7.0-alpha.4 (2.7.0)
* [IMPROVEMENT] [BREAKING] Adds the ability to mock only certain parts of the Evexi API and not others via the .all()

# 2.7.0-alpha.3
* [BUG] Fixes bug with ReceiptGenerator helper not reporting when throwing

# 2.7.0-alpha.2
* [IMPROVEMENT] Adjust OTI payment response (include additional info)

# 2.7.0-alpha.1
* [IMPROVEMENT] OTI Payment
* [IMPROVEMENT] Serial

# 2.6.2
* [BUG] Fix URL for FS/download method to test download functionality
* [BUG] Window.playing and window.stopping event can sometimes be provided with null
* [IMPROVEMENT] Update documentation for touch to engage feature

# 2.6.0
The package has been re-written from the ground up for an improved structure and tree-shaking ability. Package provides an ES build by default.

* [IMPROVEMENT] Update the way we bundle examples (Parcel 2.X)
* [IMPROVEMENT] Repo now only contains examples (src and build (ready to put onto Evexi platform)). Evexi package itself publishes to NPM
* [FEATURE] Helpers added
* [FEATURE] Offer a legacy script and a modern script (Modern is tree-shakable)
* [IMPROVEMENT] Update branding
* [FEATURE] Interactive Scan is now offered within the Evexi namespace
* [FEATURE] Offers EvexiMock class and service for working locally without the need to publish to Evexi to use the API
* [IMPROVEMENT] Tidy linting
* [BUG] Bugfix for legacy on SSSP2 (polyfill local rather then CDN)
* [IMPROVEMENT] Examples are built with Github actions

# 2.5.0
* Added example for stripe proxy

# 2.4.5
* Update Dependencies

# 2.4.3
* Bug fix

# 2.4.2
* Typings bug fix

# 2.4.1
* Bug fix with Proxy validation

# 2.4.0
* Initial release

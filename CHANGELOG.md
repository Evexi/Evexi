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

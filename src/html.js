import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="UTF-8" />    <meta name="google-site-verification" content="fFgNCv-Vr8ZwPUV-wdy1SwTlYpxG4FI9k-FEkJaswrQ" />
          <meta name="description" content="Delightful governance"/>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <script defer src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyC1d6ej2p77--6Wf8m6dzdrbvKhfBnb3Ks&libraries=places" type="text/javascript"></script>

          <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,600|Poppins:300,600" rel="stylesheet"/>
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

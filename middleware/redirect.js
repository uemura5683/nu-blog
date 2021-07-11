export default function ({ route, redirect }) {
    const search = route.fullPath.match(/\?date_id=.*$/);
    if (search) {
      const split     = route.fullPath.split('/')
          , params    = split[split.length -1]
          , param     = params.split('=')
          , target    = param[param.length -1]
          , routepath = route.path
          , replace   = routepath.replace( '/detail/', '' );

      const redirectUrl = replace + '/' + target
      return redirect(301, redirectUrl)
    }

}
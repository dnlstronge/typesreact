type project = {
    uid: number, /* Id of project*/
    title: string, /* Name of project*/
    image: string, /* PlaceHolder Image*/
    imageArray: string[] /*Screens of project */
    url: string, /*Live demo url */
    git: string /*github link */
    route: string, /* routes to live demo */
    isLive: boolean, /*if the demo is live */
    gif: string | boolean /* false if no gif */
    contentMain: string /* about project */
    contentSup: string /*supplementary content */
    techUsed: string[] /* array of react icons */
}

export default project;
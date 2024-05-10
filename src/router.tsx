// imitation Express
type RequestHandler = (req: Request) => Response | Promise<Response>;

interface RouteHandlers {
  [path: string]: RequestHandler;
}

interface Routes {
  [method: string]: RouteHandlers;
}

export class Router {
  routes: Routes = { GET: {} };

  get(path: string, handler: RequestHandler): void {
    this.routes.GET[path] = handler;
  }

  handle(req: Request) {
    const { pathname } = new URL(req.url);
    const handler = this.routes.GET[pathname];
    if (!handler) {
      return new Response('Not Found', { status: 404 });
    }

    return handler(req);
  }
}

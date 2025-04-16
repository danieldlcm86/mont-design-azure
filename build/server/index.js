import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse, Link } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "icon",
  href: "/favicon.ico",
  type: "image/x-icon",
  sizes: "44x44"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}, {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "es",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const Logo = "/logos/dark-transparent.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ jsx("header", { className: "navbar-container", children: /* @__PURE__ */ jsxs("nav", { className: `navbar ${isScrolled ? "scrolled" : ""}`, children: [
    /* @__PURE__ */ jsx("div", { className: "navbar-logo", children: /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx("img", { src: Logo, alt: "logo" }) }) }),
    /* @__PURE__ */ jsxs("div", { className: `navbar-menu ${menuOpen ? "open" : ""}`, children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/", onClick: toggleMenu, children: "Inicio" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#diseños", onClick: toggleMenu, children: "Diseños" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#nosotros", onClick: toggleMenu, children: "Nosotros" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#contacto", onClick: toggleMenu, children: "Contacto" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `hamburger ${menuOpen ? "active" : ""}`, onClick: toggleMenu, children: [
      /* @__PURE__ */ jsx("span", {}),
      /* @__PURE__ */ jsx("span", {}),
      /* @__PURE__ */ jsx("span", {})
    ] })
  ] }) });
};
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "footer", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer__container", children: [
      /* @__PURE__ */ jsxs("div", { className: "footer__column", children: [
        /* @__PURE__ */ jsx("img", { src: "/logos/Imagotipo-light.png", alt: "Logo", className: "footer__logo" }),
        /* @__PURE__ */ jsx("p", { className: "footer__description", children: "Mont Design tiene un legado de tres generaciones en la carpintería." }),
        /* @__PURE__ */ jsx("p", { className: "footer__description", children: "Nos distinguimos por nuestro enfoque en el diseño moderno, la calidad de los materiales, y la capacidad de ofrecer soluciones para diferentes tipos de espacios." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer__column", children: [
        /* @__PURE__ */ jsx("h3", { className: "footer__title", children: "Secciones" }),
        /* @__PURE__ */ jsxs("ul", { className: "footer__list", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#inicio", children: "Inicio" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#servicios", children: "Servicios" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#nosotros", children: "Sobre Nosotros" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#contacto", children: "Contacto" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer__column", children: [
        /* @__PURE__ */ jsx("h3", { className: "footer__title", children: "Contacto" }),
        /* @__PURE__ */ jsxs("ul", { className: "footer__list", children: [
          /* @__PURE__ */ jsx("li", { children: "Dirección: Calle Pelícano esq. faisán. Parrilla, Centro, Tabasco. CP.86030" }),
          /* @__PURE__ */ jsx("li", { children: "Teléfono: (993) 432 6601" }),
          /* @__PURE__ */ jsx("li", { children: "consultoriajuridicasi.mex@gmail.com" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "copyright-container", children: /* @__PURE__ */ jsxs("div", { className: "copyright", children: [
      /* @__PURE__ */ jsxs("p", { className: "copyright-font", children: [
        "Mont Design Carpintería ©. Todos los derechos reservados, ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " "
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "ghost", children: [
        "Desarrollado por ",
        /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/danieldlcm86", target: "_blank", children: "Daniel Maldonado" })
      ] })
    ] }) })
  ] });
}
function HeroSection() {
  return (
    // Se muestra un fondo de video
    /* @__PURE__ */ jsxs("section", { className: "video-cover", children: [
      /* @__PURE__ */ jsxs("video", { className: "video-cover", autoPlay: true, muted: true, loop: true, playsInline: true, children: [
        /* @__PURE__ */ jsx("source", { src: "/banners/banner03.mp4", type: "video/mp4" }),
        "Tu navegador no soporta reproducción de videos."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "video-content", children: [
        /* @__PURE__ */ jsx("h1", { className: "title", children: "Mont Design" }),
        /* @__PURE__ */ jsx("img", { src: "/logos/Isotipo-transparent.png", alt: "logo" }),
        /* @__PURE__ */ jsx("p", { children: "El lujo y diseño se vuelven realidad" }),
        /* @__PURE__ */ jsxs("div", { className: "social-icons", children: [
          /* @__PURE__ */ jsx("a", { href: "https://facebook.com", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("i", { className: "fab fa-facebook-f" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://x.com", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("i", { className: "fab fa-x" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://youtube.com", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("i", { className: "fab fa-youtube" }) })
        ] })
      ] })
    ] })
  );
}
const Card = ({ image, title, location }) => {
  return /* @__PURE__ */ jsxs("div", { className: "card-container", children: [
    /* @__PURE__ */ jsx("div", { className: "card-overlay" }),
    " ",
    /* @__PURE__ */ jsx("img", { src: image, alt: title, className: "card-image" }),
    /* @__PURE__ */ jsxs("div", { className: "card-content", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h3", { className: "card-title", children: [
          title,
          ","
        ] }),
        /* @__PURE__ */ jsx("p", { className: "card-location", children: location })
      ] }),
      /* @__PURE__ */ jsxs("button", { className: "card-button", children: [
        /* @__PURE__ */ jsx("span", { className: "arrow", children: "➤" }),
        " Directions"
      ] })
    ] })
  ] });
};
const destinations = [
  {
    image: "/products/modern-modular-desk.webp",
    title: "Escritorio Modular",
    location: "Cedro"
  },
  {
    image: "/products/luxurious-living-room.webp",
    title: "Sala",
    location: "Dark"
  },
  {
    image: "/products/crafted-diningtable.webp",
    title: "Comedor",
    location: "Caoba"
  },
  {
    image: "/products/stylish-wooden.webp",
    title: "Repero",
    location: "Cedro"
  },
  {
    image: "/products/classic-dinning-table.png",
    title: "Comedor",
    location: "Caobilla"
  },
  {
    image: "/products/duo-table.png",
    title: "Comedor dúo",
    location: "Chocolate"
  },
  {
    image: "/products/sleek-floating.webp",
    title: "Mueble de entretenimiento",
    location: "Madera"
  },
  {
    image: "/products/modular-tv.png",
    title: "Mueble modular de TV",
    location: "Madera"
  },
  {
    image: "/products/banho-mueble.jpg",
    title: "Mueble de baño",
    location: "Flotante"
  }
];
const CardsSection = () => {
  return (
    // <section style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
    /* @__PURE__ */ jsx("section", { className: "grid-servicios", children: destinations.map((destination, index) => /* @__PURE__ */ jsx(
      Card,
      {
        image: destination.image,
        title: destination.title,
        location: destination.location
      },
      index
    )) })
  );
};
function Section1() {
  return /* @__PURE__ */ jsx("section", { className: "section1", id: "diseños", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "header", children: [
      /* @__PURE__ */ jsxs("div", { className: "header-title", children: [
        /* @__PURE__ */ jsx("h2", { children: "Nuestros Diseños" }),
        /* @__PURE__ */ jsx("div", { className: "line-blue" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "header-p", children: "Modernidad, Elegancia y Calidad" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "cards", children: /* @__PURE__ */ jsx(CardsSection, {}) })
  ] }) });
}
function ExperienceSection() {
  return /* @__PURE__ */ jsx("section", { className: "experience-section", children: /* @__PURE__ */ jsx("div", { className: "experience-overlay", children: /* @__PURE__ */ jsxs("div", { className: "experience-content", children: [
    /* @__PURE__ */ jsx("h2", { children: "Experiencia y Legado" }),
    /* @__PURE__ */ jsx("p", { children: "Más de 70 años creando muebles que cuentan historias en Tabasco, fusionando tradición y modernidad." }),
    /* @__PURE__ */ jsx(Link, { to: "/nosotros", className: "btn-conocenos", children: "Conócenos" })
  ] }) }) });
}
function Section2() {
  return /* @__PURE__ */ jsx("section", { className: "section2", id: "nosotros", children: /* @__PURE__ */ jsx(ExperienceSection, {}) });
}
function ContactSection() {
  const form = useRef(null);
  const [sent, setSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs.sendForm(
      "service_montdesign",
      // tu SERVICE_ID
      "template_mensaje",
      // tu TEMPLATE_ID
      form.current,
      "YOUR_PUBLIC_KEY"
      // tu PUBLIC_KEY
    ).then(
      () => {
        var _a;
        setSent(true);
        (_a = form.current) == null ? void 0 : _a.reset();
      },
      (error) => {
        console.error("Error al enviar:", error);
      }
    );
  };
  return /* @__PURE__ */ jsx("section", { className: "contact-section", id: "contacto", children: /* @__PURE__ */ jsxs("div", { className: "contact-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "contact-info", children: [
      /* @__PURE__ */ jsx("h2", { children: "Contáctanos" }),
      /* @__PURE__ */ jsx("p", { children: "¿Tienes un proyecto en mente o deseas más información?" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "📍 Dirección:" }),
          " Faisán esq. Pelícano, Parrilla, Centro, Tabasco. CP. 86030"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "📞 Teléfono:" }),
          " +52 993 211 1311"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "📧 Email:" }),
          " contacto@montdesign.mx"
        ] }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "https://wa.me/529932111311", target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsx("i", { className: "fab fa-whatsapp", style: { color: "#25D366", marginRight: "8px" } }),
          /* @__PURE__ */ jsx("strong", { children: "Contáctanos." })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("form", { className: "contact-form", ref: form, onSubmit: sendEmail, children: [
      /* @__PURE__ */ jsx("input", { type: "text", name: "nombre", placeholder: "Nombre", required: true }),
      /* @__PURE__ */ jsx("input", { type: "email", name: "email", placeholder: "Correo electrónico", required: true }),
      /* @__PURE__ */ jsx("textarea", { name: "mensaje", rows: 5, placeholder: "Escribe tu mensaje", required: true }),
      /* @__PURE__ */ jsx("button", { type: "submit", children: "Enviar mensaje" }),
      sent && /* @__PURE__ */ jsx("p", { className: "success-message", children: "✅ ¡Mensaje enviado!" })
    ] })
  ] }) });
}
function LayoutHome() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx(Section1, {}),
    /* @__PURE__ */ jsx(Section2, {}),
    /* @__PURE__ */ jsx(ContactSection, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function HomePage() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(LayoutHome, {}) });
}
function meta$1({}) {
  return [{
    title: "Mont Design"
  }, {
    name: "Descripción",
    content: "Bienvenido a Mont Design"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(HomePage, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function Nosotros$1() {
  return /* @__PURE__ */ jsxs("section", { className: "nosotros-hero", children: [
    /* @__PURE__ */ jsx("div", { className: "hero-overlay", children: /* @__PURE__ */ jsxs("div", { className: "hero-content", children: [
      /* @__PURE__ */ jsx("h1", { children: "Nosotros" }),
      /* @__PURE__ */ jsx("p", { children: "Más que una carpintería: una historia de tres generaciones que transforman espacios con diseño, calidad y pasión artesanal." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "nosotros-section", children: /* @__PURE__ */ jsx("div", { className: "nosotros-container", children: /* @__PURE__ */ jsxs("div", { className: "nosotros-content", children: [
      /* @__PURE__ */ jsxs("div", { className: "nosotros-text", children: [
        /* @__PURE__ */ jsx("h2", { children: "Nuestro legado" }),
        /* @__PURE__ */ jsx("p", { children: "Con raíces en el apellido Montejo, hemos sido pioneros de la carpintería moderna en Tabasco. Desde nuestros inicios, hemos trabajado con hogares, oficinas, hospitales y hoteles, siempre buscando crear espacios que inspiren." }),
        /* @__PURE__ */ jsx("p", { children: "Cada mueble que fabricamos combina tradición, funcionalidad y diseño contemporáneo, hecho a mano con maderas de alta calidad que garantizan durabilidad y elegancia." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "nosotros-image", children: /* @__PURE__ */ jsx("img", { src: "/banners/legacy-montdesign.png", alt: "Taller Mont Design" }) })
    ] }) }) })
  ] });
}
function LayoutNosotros() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Nosotros$1, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Nosotros() {
  return /* @__PURE__ */ jsx(LayoutNosotros, {});
}
function meta({}) {
  return [{
    title: "Mont Design"
  }, {
    name: "Descripción",
    content: "Bienvenido a Mont Design"
  }];
}
const nosotros = withComponentProps(function NosotrosRoute() {
  return /* @__PURE__ */ jsx(Nosotros, {});
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nosotros,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DPmmA351.js", "imports": ["/assets/chunk-XJI4KG32-Nm3plTOX.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-rP6dVkKe.js", "imports": ["/assets/chunk-XJI4KG32-Nm3plTOX.js", "/assets/with-props-DI-BdujO.js"], "css": ["/assets/root-lukrZZcg.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-vsbXOEPG.js", "imports": ["/assets/with-props-DI-BdujO.js", "/assets/chunk-XJI4KG32-Nm3plTOX.js", "/assets/Footer-CNldFv8R.js"], "css": ["/assets/home-CND9f5lR.css", "/assets/Footer-CPr_VzNc.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/nosotros": { "id": "routes/nosotros", "parentId": "root", "path": "nosotros", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/nosotros-BePUbJau.js", "imports": ["/assets/with-props-DI-BdujO.js", "/assets/chunk-XJI4KG32-Nm3plTOX.js", "/assets/Footer-CNldFv8R.js"], "css": ["/assets/nosotros-CA80yKnz.css", "/assets/Footer-CPr_VzNc.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-cfe00982.js", "version": "cfe00982" };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/nosotros": {
    id: "routes/nosotros",
    parentId: "root",
    path: "nosotros",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr
};

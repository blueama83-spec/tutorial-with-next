Deno.serve((req: Request) => {
  const url = new URL(req.url);
  return new Response(`Hello from Deno Deploy! You visited: ${url.pathname}`, {
    headers: { "content-type": "text/plain" },
  });
});

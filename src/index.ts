export default {
  async fetch(request: Request): Promise<Response> {
    const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Maintenance</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
	<style>
	  * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	  }
	  body {
		font-family: 'Playfair Display', serif;
	  }
	  @media (min-width: 1280px) {
		.bg-image {
		  transform: translateX(calc(50vw - 800px)) scale(1.57) translateY(200px) rotate(62deg);
		}
	  }
	</style>
  </head>
  <body>
	<div style="width: 100vw; height: 100svh; position: relative;">
	  <!-- bg -->
	  <div style="background-color: #F7F7F7; width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 0; overflow: hidden;">
		<div style="min-width: 1727px; min-height: 1221px; position: relative; z-index: 10;">
		  <img
			src="https://www.houseofvillain.com/images/TY_LOGO_GREEN.svg"
			alt="TY-bg"
			width="1727"
			height="1221"
			style="position: absolute; top: 0; left: 0; transform: translateX(calc(50vw - 800px)) scale(1.07) translateY(-37px) rotate(62deg); object-fit: none; z-index: 10;"
			class="bg-image"
		  />
		</div>
		<img
		  src="https://www.houseofvillain.com/_next/image?url=%2Fimages%2FHOV-LOGO-H.png&w=750&q=75"
		  alt="TY-bg"
		  width="350"
		  height="197"
		  style="position: absolute; bottom: 22px; left: 50%; transform: translateX(-50%); object-fit: contain; z-index: 20;"
		/>
	  </div>
	  <div style="width: 100%; height: 100%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 30; display: flex; flex-direction: column; justify-content: center; align-items: center;">
		<h1 style="font-family: 'Playfair Display', serif; font-size: 54px; font-weight: bold; line-height: 1; letter-spacing: 0%; text-align: center; color: black;">
		 Registration Closed
		</h1>
		<p style="font-family: 'Playfair Display', serif; font-weight: bold; font-size: 32px; line-height: 1; letter-spacing: 0%; text-align: center; color: black;">
		  Stay tuned for upcoming events and announcements.
		</p>
	  </div>
	</div>
  </body>
  </html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
} satisfies ExportedHandler;

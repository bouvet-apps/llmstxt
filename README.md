# llms.txt for Enonic XP

Minimal Enonic XP app that exposes a plain-text `llms.txt` file at `/llms.txt` for each site.

The site administrator edits the full file body in site configuration, and the app serves that text unchanged over HTTP.

## Build

From the project root:

```bash
./gradlew build
```

The packaged app will be created in `build/libs`. Copy the JAR to `$XP_HOME/deploy` in your Enonic XP installation.

## Install On A Site

1. Deploy the JAR to Enonic XP.
2. Open the site in Content Studio and edit the site settings.
3. Add the `llms.txt` application to the site.
4. Open the application config and enter the text you want to expose.
5. Publish the site changes.

## Site Configuration

The app exposes a single textarea in site config. Paste the exact contents you want returned from:

```text
https://your-site.example/llms.txt
```

The response is returned as `text/plain`. If the textarea is empty, the endpoint returns an empty response body.

## Languages

The app includes English and Norwegian labels for the site configuration field.

# Pixelfed + Docker installtion

Connect via SSH to your server and decide where you want to install Pixelfed.

In this guide I'm going to assume it will be installed at `/data/pixelfed`.

1. **Install required software** as mentioned in the [Software Prerequisites](prerequisites.md#software)
1. **Create the parent directory** by running `mkdir -p /data`
1. **Clone the Pixelfed repository** by running `git clone https://github.com/pixelfed/pixelfed.git /data/pixelfed`
1. **Change to the Pixelfed directory** by running `cd /data/pixelfed`

## Modifying your settings (`.env` file)

### Copy the example configuration file

Pixelfed contains a default configuration file (`.env.docker`) you should use as a starter, however, before editing anything, make a copy of it and put it in the *right* place (`.env`).

Run the following command to copy the file: `cp .env.docker .env`

### Modifying the configuration file

The configuration file is *quite* long, but the good news is that you can ignore *most* of it, most of the *server-specific* settings are configured for you out of the box.

The minimum required settings you **must** change is:

* (required) `APP_DOMAIN` which is the hostname you plan to run your Pixelfed server on (e.g. `pixelfed.social`) - must **not** include `http://` or a trailing slash (`/`)!
* (required) `DB_PASSWORD` which is the database password, you can use a service like [pwgen.io](https://pwgen.io/en/) to generate a secure one.
* (optional) `ENFORCE_EMAIL_VERIFICATION` should be set to `"false"` if you don't plan to send emails.
* (optional) `MAIL_DRIVER` and related `MAIL_*` settings if you plan to use an [E-mail/SMTP provider](prerequisites.md#e-mail-smtp-provider) - See [Email variables documentation](https://docs.pixelfed.org/running-pixelfed/installation/#email-variables).
* (optional) `PF_ENABLE_CLOUD` / `FILESYSTEM_CLOUD` if you plan to use an [Object Storage provider](prerequisites.md#object-storage).

See the [`Configure environment variables`](https://docs.pixelfed.org/running-pixelfed/installation/#app-variables) documentation for details!

You need to mainly focus on following sections

* [App variables](https://docs.pixelfed.org/running-pixelfed/installation/#app-variables)
* [Email variables](https://docs.pixelfed.org/running-pixelfed/installation/#email-variables)

You can skip the following sections, since they are already configured/automated for you:

* `Redis`
* `Database` (except for `DB_PASSWORD`)
* `One-time setup tasks`

### Starting the service

With everything in place and (hopefully) well-configured, we can now go ahead and start our services by running

```shell
docker compose up -d
```

This will download all the required Docker images, start the containers, and being the automatic setup.

You can follow the logs by running `docker compose logs` - you might want to scroll to the top to logs from the start.

You can use the CLI flag `--tail=100` to only see the most recent (`100` in this example) log lines for each container.

You can use the CLI flag `--follow` to continue to see log output from the containers.

You can combine `--tail=100` and `--follow` like this `docker compose logs --tail=100 --follow`.

If you only care about specific contaieners, you can add them to the end of the command like this `docker compose logs web worker proxy`.

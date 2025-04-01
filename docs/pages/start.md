Here is the basic format for downloading a JAR:

`(GET) /download/[software]/[version]/[build]`

You MUST include all of these parameters (except for build when using Vanilla).

[version] and [build] can be 'latest' to retrieve the latest value for each parameter.

Request examples:

- `(GET) /download/paper/latest/latest`
- `(GET) /download/vanilla/1.21`
- `(GET) /download/purpur/1.20.6/2232`

When using fabric, the format is similar:

`(GET) /download/fabric/[version]/[loader]/?installer=[installer]`.

You MUST include version & loader parameters, but installer is optional.

All [version], [loader], and [installer] can be 'latest'. If omitted, installer defaults to 'latest'.

Request examples:

- `(GET) /download/fabric/latest/latest/?installer=1.0.3`
- `(GET) /download/fabric/1.21.5/0.16.11`

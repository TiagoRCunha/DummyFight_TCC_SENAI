FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env

WORKDIR /api

COPY . ./
RUN dotnet restore
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /api
COPY --from=build-env /api/out .
ENTRYPOINT ["dotnet", "Api.web.dll"]
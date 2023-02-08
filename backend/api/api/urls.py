from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = (
    [
        path("admin/", admin.site.urls),
        path("api/auth/", include("authorization.urls")),
        path("api/", include("articles.urls")),
        path("api/", include("landing.urls")),
        path("api/", include("about.urls")),
    ]
    + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
)

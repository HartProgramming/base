from django.urls import path
from .views import *

urlpatterns = [
    path("value/", ValueAPIView.as_view(), name="value-list"),
    path("value/<int:pk>/", ValueDetailAPIView.as_view(), name="value-detail"),
    path(
        "value/bulk/",
        ValueBulkAPIView.as_view(),
        name="value-bulk-detail",
    ),
    path("category/", CategoryAPIView.as_view(), name="category-list"),
    path("category/<int:pk>/", CategoryDetailAPIView.as_view(), name="category-detail"),
    path(
        "category/bulk/",
        CategoryBulkAPIView.as_view(),
        name="category-bulk-detail",
    ),
    path("faq/", FAQListCreateView.as_view(), name="faq-list"),
    path("faq/<int:pk>/", FAQRetrieveUpdateDestroyView.as_view(), name="faqs-detail"),
    path(
        "faq/bulk/",
        FAQBulkAPIView.as_view(),
        name="faq-bulk-detail",
    ),
    path("aboutblock/", AboutBlockAPIView.as_view(), name="aboutblock-list"),
    path(
        "aboutblock/<int:pk>/",
        AboutBlockDetailAPIView.as_view(),
        name="aboutblock-detail",
    ),
    path(
        "aboutblock/bulk/",
        AboutBlockBulkAPIView.as_view(),
        name="aboutblock-bulk-detail",
    ),
    path(
        "missionstatement/",
        MissionStatementAPIView.as_view(),
        name="missionstatement-list",
    ),
    path(
        "missionstatement/<int:pk>/",
        MissionStatementDetailAPIView.as_view(),
        name="missionstatement-update",
    ),
    path(
        "missionstatement/bulk/",
        MissionStatementBulkAPIView.as_view(),
        name="missionstatement-bulk-detail",
    ),
    path(
        "companyhistory/",
        CompanyHistoryAPIView.as_view(),
        name="companyhistory-list",
    ),
    path(
        "companyhistory/<int:pk>/",
        CompanyHistoryDetailAPIView.as_view(),
        name="companyhistory-update",
    ),
    path(
        "companyhistory/bulk/",
        CompanyHistoryBulkAPIView.as_view(),
        name="companyhistory-bulk-detail",
    ),
    path("about/", AboutFullView.as_view(), name="about-full"),
]

from django.urls import path
from .views import (
    AboutBlockAPIView,
    MissionStatementAPIView,
    CompanyHistoryAPIView,
    AboutFullView,
    ValueViewSet,
    TeamMemberListCreateView,
    TeamMemberRetrieveUpdateDestroyView,
    ContactInformationAPIView,
    FAQRetrieveUpdateDestroyView,
    FAQListCreateView,
)

urlpatterns = [
    path("value/", ValueViewSet.as_view(), name="value-list"),
    path("faq/", FAQListCreateView.as_view(), name="faq-list"),
    path("faq/<int:pk>/", FAQRetrieveUpdateDestroyView.as_view(), name="faqs-detail"),
    path("aboutblock/", AboutBlockAPIView.as_view(), name="aboutblock-list"),
    path(
        "contactinformation/",
        ContactInformationAPIView.as_view(),
        name="contactinformation-list",
    ),
    path(
        "missionstatement/",
        MissionStatementAPIView.as_view(),
        name="missionstatement-list",
    ),
    path(
        "companyhistory/", CompanyHistoryAPIView.as_view(), name="companyhistory-list"
    ),
    path("about/", AboutFullView.as_view(), name="about-full"),
    path("teammember/", TeamMemberListCreateView.as_view(), name="teammember-list"),
    path(
        "members/<int:pk>/",
        TeamMemberRetrieveUpdateDestroyView.as_view(),
        name="member-detail",
    ),
]

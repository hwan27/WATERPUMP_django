from django.urls import path
from . import views

app_name = "pumps"
urlpatterns = [
    path("", view=views.Feed.as_view(), name='feed'),
    path("cities/", view=views.ListAllCities.as_view(), name="cities"),
    path("towns/", view=views.ListAllTowns.as_view(), name="towns"),
    path("sectors/", view=views.ListAllSectors.as_view(), name="sectors"),
    # path("pumps/", view=views.ListAllPumps.as_view(), name="pumps"),
    path('<str:city_id>/', view=views.ListCity.as_view(), name='city_feed'),
    path("sector/<str:sector_id>/", view=views.ListSector.as_view(), name='sectorFeed'),
    path('town/<str:town_id>/', view=views.ListTown.as_view(), name='townFeed'),
    # path('pump/<str:pump_id>/', view=views.ListPump.as_view(), name='pumpFeed')
]

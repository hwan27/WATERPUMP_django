from django.urls import path

from . import views

app_name = 'modems'
urlpatterns = [
    path('', view=views.connectModem.as_view(), name='connect_modem'),
    path('pressure/', view=views.setPressure.as_view(), name='set_pressure')
]

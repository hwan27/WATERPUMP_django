from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers

# Create your views here.


class Feed(APIView):

    def get(self, request, format=None):

        user = request.user
        managing_city = user.managing

        serializer = serializers.CitySerializer(managing_city)

        return Response(data=serializer.data)


class ListAllCities(APIView):

    def get(self, request, format=None):

        all_cities = models.City.objects.all()

        serializer = serializers.CitySerializer(all_cities, many=True)

        return Response(data=serializer.data)


class ListAllTowns(APIView):

    def get(self, request, format=None):

        all_towns = models.Town.objects.all()

        serializer = serializers.TownSerializer(all_towns, many=True)

        return Response(data=serializer.data)


class ListAllSectors(APIView):

    def get(self, request, format=None):

        all_sectors = models.Sector.objects.all()

        serializer = serializers.SectorSerializer(all_sectors, many=True)

        return Response(data=serializer.data)


# class ListAllPumps(APIView):

#     def get(self, request, format=None):

#         all_pumps = models.Pump.objects.all()

#         serializer = serializers.PumpSerializer(all_pumps, many=True)

#         return Response(data=serializer.data)

class ListCity(APIView):

    def get(self, request, city_id, format=None):

        try:
            city = models.City.objects.get(id=city_id)
            
        except models.City.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = serializers.CitySerializer(city)

        return Response(data=serializer.data)


class ListSector(APIView):

    def get_sector(self, sector_id):

        try:
            found_sector = models.Sector.objects.get(sector_id=sector_id)
            return found_sector
        except models.Sector.DoesNotExist:
            return None

    def get(self, request, sector_id, format=None):

        found_sector = self.get_sector(sector_id)

        if found_sector is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        # try:
        #     sector = models.Sector.objects.get(id=sector_id)
           
        # except models.Sector.DoesNotExist:
        #     return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = serializers.SectorSerializer(found_sector)

        return Response(data=serializer.data)

    def put(self, request, sector_id, format=None):

        found_sector = self.get_sector(sector_id)

        if found_sector is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        else:

            serializer = serializers.SectorSerializer(found_sector, data=request.data, partial=True)

            if serializer.is_valid():

                serializer.save()

                return Response(data=serializer.data)

            else:

                return Response(data=serializer.errors)

# class ListPump(APIView):

#     def get_pump(self, pump_id):

#         try:
#             found_pump = models.Pump.objects.get(id=pump_id)
#             return found_pump
#         except models.Pump.DoesNotExist:
#             return None

#     def get(self, request, pump_id, format=None):

#         found_pump = self.get_pump(pump_id)

#         if found_pump is None:
#             return Response(status=status.HTTP_404_NOT_FOUND)

#         # try:
#         #     sector = models.Sector.objects.get(id=sector_id)
           
#         # except models.Sector.DoesNotExist:
#         #     return Response(status=status.HTTP_404_NOT_FOUND)

#         serializer = serializers.PumpSerializer(found_pump)

#         return Response(data=serializer.data)

    # def put(self, request, pump_id, format=None):

    #     found_pump = self.get_pump(pump_id)

    #     if found_pump is None:
    #         return Response(status=status.HTTP_404_NOT_FOUND)

    #     else:

    #         serializer = serializers.PumpSerializer(found_pump, data=request.data, partial=True)

    #         if serializer.is_valid():

    #             serializer.save()

    #             return Response(data=serializer.data)

    #         else:

    #             return Response(data=serializer.errors)


class ListTown(APIView):

    def get(self, request, town_id, format=None):

        try:
            town = models.Town.objects.get(id=town_id)
        except models.Town.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = serializers.TownSerializer(town)

        return Response(data=serializer.data)

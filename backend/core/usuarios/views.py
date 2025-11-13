from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model

User = get_user_model()

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]
    
    def get_serializer_class(self):
        # Vamos a crear el serializer después
        from .serializers import UsuarioSerializer
        return UsuarioSerializer
    
    @action(detail=False, methods=['get'], url_path='me')
    def me(self, request):
        """Obtiene los datos del usuario autenticado"""
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)
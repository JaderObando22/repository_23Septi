import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm"; 
import { Repository } from "typeorm";
import { CreateProductDto } from "../dto/product.dto";
import { CreateProveedorDto } from "../dto/proveedor.dto";
import { Proveedor } from "../entities/proveedor.entity";

@Injectable()
export class ProveedorService {
  constructor(
    @InjectRepository(Proveedor)
    private readonly proveedorRepo: Repository<Proveedor>,
  ) {}

  //Este es para crear un registro de productos
  async create(createProveedorDto: CreateProveedorDto) {
    const proveedor = this.proveedorRepo.create(createProveedorDto);
    await this.proveedorRepo.save(proveedor);

    return proveedor;
  }

    //Encontrar un registro de productos
    //Mostrar todos los registros de los productos

    //encontrar un registro
  //findOne (id: number) {
  //return this.productRepo.findOne({ id });
  //}

  //encontrar un registro con relaciones
  findOne(id:number){
    return this.proveedorRepo.findOneBy ({id });
    
    }

    findAll(){
      return this.proveedorRepo.find({
       order: {id: 'ASC' }, 
      });
    }

    //Eliminar un registro de los productos

    async remove(id: number){
      const Proveedor = await this.findOne(id);
      await this.proveedorRepo.remove(Proveedor);
      return 'Producto eliminado satisfactoriamente';
    }

    //Actualizar un producto o un registro de productos

    async update(id: number, cambios: CreateProveedorDto){
      // aqui se encuentra el 
      const oldProveedor = await this.findOne(id);
      //Aqui lo actualizo o lo uno con los nuevos cambios
      const updatedProveedor = await this.proveedorRepo.merge(oldProveedor, cambios);
      //Aqui retornare  el product
      return this.proveedorRepo.save(updatedProveedor);
    }
 
  }

package com.leap.employee.service.mapper;

import com.leap.employee.domain.*;
import com.leap.employee.service.dto.DocumentTypeDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link DocumentType} and its DTO {@link DocumentTypeDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface DocumentTypeMapper extends EntityMapper<DocumentTypeDTO, DocumentType> {
    @Named("documentTypeName")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "documentTypeName", source = "documentTypeName")
    DocumentTypeDTO toDtoDocumentTypeName(DocumentType documentType);
}

package com.leap.employee.service.mapper;

import com.leap.employee.domain.*;
import com.leap.employee.service.dto.DocumentDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Document} and its DTO {@link DocumentDTO}.
 */
@Mapper(componentModel = "spring", uses = { DocumentTypeMapper.class, EmployeeMapper.class })
public interface DocumentMapper extends EntityMapper<DocumentDTO, Document> {
    @Mapping(target = "documentType", source = "documentType", qualifiedByName = "documentTypeName")
    @Mapping(target = "employee", source = "employee", qualifiedByName = "name")
    DocumentDTO toDto(Document s);
}

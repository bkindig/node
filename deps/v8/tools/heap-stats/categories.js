// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Categories for instance types.
const CATEGORIES = new Map([
  [
    'user', new Set([
      '*FIXED_ARRAY_CONTEXT_SUB_TYPE',
      '*FIXED_ARRAY_COPY_ON_WRITE_SUB_TYPE',
      '*FIXED_ARRAY_DICTIONARY_PROPERTIES_SUB_TYPE',
      '*FIXED_ARRAY_JS_COLLECTION_SUB_TYPE',
      '*FIXED_ARRAY_JS_WEAK_COLLECTION_SUB_TYPE',
      '*FIXED_ARRAY_PACKED_ELEMENTS_SUB_TYPE',
      'CONS_ONE_BYTE_STRING_TYPE',
      'CONS_STRING_TYPE',
      'DESCRIPTOR_ARRAY_TYPE',
      'EXTERNAL_INTERNALIZED_STRING_TYPE',
      'EXTERNAL_ONE_BYTE_INTERNALIZED_STRING_TYPE',
      'EXTERNAL_ONE_BYTE_STRING_TYPE',
      'EXTERNAL_STRING_TYPE',
      'EXTERNAL_STRING_WITH_ONE_BYTE_DATA_TYPE',
      'FIXED_DOUBLE_ARRAY_TYPE',
      'FIXED_FLOAT32_ARRAY_TYPE',
      'FIXED_FLOAT64_ARRAY_TYPE',
      'FIXED_INT16_ARRAY_TYPE',
      'FIXED_INT32_ARRAY_TYPE',
      'FIXED_INT8_ARRAY_TYPE',
      'FIXED_UINT16_ARRAY_TYPE',
      'FIXED_UINT32_ARRAY_TYPE',
      'FIXED_UINT8_ARRAY_TYPE',
      'FIXED_UINT8_CLAMPED_ARRAY_TYPE',
      'HEAP_NUMBER_TYPE',
      'INTERNALIZED_STRING_TYPE',
      'JS_ARGUMENTS_TYPE',
      'JS_ARRAY_BUFFER_TYPE',
      'JS_ARRAY_TYPE',
      'JS_BOUND_FUNCTION_TYPE',
      'JS_DATE_TYPE',
      'JS_ERROR_TYPE',
      'JS_FAST_ARRAY_KEY_ITERATOR_TYPE',
      'JS_FAST_ARRAY_VALUE_ITERATOR_TYPE',
      'JS_FAST_HOLEY_ARRAY_VALUE_ITERATOR_TYPE',
      'JS_FAST_HOLEY_SMI_ARRAY_VALUE_ITERATOR_TYPE',
      'JS_FAST_SMI_ARRAY_KEY_VALUE_ITERATOR_TYPE',
      'JS_FAST_SMI_ARRAY_VALUE_ITERATOR_TYPE',
      'JS_FUNCTION_TYPE',
      'JS_GENERATOR_OBJECT_TYPE',
      'JS_GENERIC_ARRAY_VALUE_ITERATOR_TYPE',
      'JS_GLOBAL_OBJECT_TYPE',
      'JS_GLOBAL_PROXY_TYPE',
      'JS_MAP_KEY_VALUE_ITERATOR_TYPE',
      'JS_MAP_TYPE',
      'JS_MESSAGE_OBJECT_TYPE',
      'JS_OBJECT_TYPE',
      'JS_PROMISE_TYPE',
      'JS_REGEXP_TYPE',
      'JS_SET_TYPE',
      'JS_STRING_ITERATOR_TYPE',
      'JS_TYPED_ARRAY_TYPE',
      'JS_VALUE_TYPE',
      'JS_WEAK_MAP_TYPE',
      'MUTABLE_HEAP_NUMBER_TYPE',
      'ONE_BYTE_INTERNALIZED_STRING_TYPE',
      'ONE_BYTE_STRING_TYPE',
      'PROPERTY_ARRAY_TYPE',
      'SHORT_EXTERNAL_INTERNALIZED_STRING_TYPE',
      'SHORT_EXTERNAL_ONE_BYTE_INTERNALIZED_STRING_TYPE',
      'SHORT_EXTERNAL_ONE_BYTE_STRING_TYPE',
      'SHORT_EXTERNAL_STRING_TYPE',
      'SLICED_ONE_BYTE_STRING_TYPE',
      'SLICED_STRING_TYPE',
      'STRING_TYPE',
      'SYMBOL_TYPE',
      'THIN_ONE_BYTE_STRING_TYPE',
      'THIN_STRING_TYPE',
    ])
  ],
  [
    'system', new Set([
      'ACCESS_CHECK_INFO_TYPE',
      'ACCESSOR_INFO_TYPE',
      'ACCESSOR_PAIR_TYPE',
      'ALLOCATION_MEMENTO_TYPE',
      'ALLOCATION_SITE_TYPE',
      'BOILERPLATE_ELEMENTS_TYPE',
      'BOILERPLATE_NAME_DICTIONARY_TYPE',
      'BOILERPLATE_PROPERTY_ARRAY_TYPE',
      'BYTE_ARRAY_TYPE',
      'CELL_TYPE',
      'CONTEXT_EXTENSION_TYPE',
      '*FIXED_ARRAY_DEPENDENT_CODE_SUB_TYPE',
      '*FIXED_ARRAY_ENUM_CACHE_SUB_TYPE',
      '*FIXED_ARRAY_ENUM_INDICES_CACHE_SUB_TYPE',
      '*FIXED_ARRAY_FAST_TEMPLATE_INSTANTIATIONS_CACHE_SUB_TYPE',
      '*FIXED_ARRAY_NUMBER_STRING_CACHE_SUB_TYPE',
      '*FIXED_ARRAY_PROTOTYPE_USERS_SUB_TYPE',
      '*FIXED_ARRAY_REGEXP_MULTIPLE_CACHE_SUB_TYPE',
      '*FIXED_ARRAY_RETAINED_MAPS_SUB_TYPE',
      '*FIXED_ARRAY_SCOPE_INFO_SUB_TYPE',
      '*FIXED_ARRAY_SCRIPT_LIST_SUB_TYPE',
      '*FIXED_ARRAY_SINGLE_CHARACTER_STRING_CACHE_SUB_TYPE',
      '*FIXED_ARRAY_STRING_SPLIT_CACHE_SUB_TYPE',
      '*FIXED_ARRAY_TEMPLATE_INFO_SUB_TYPE',
      '*FIXED_ARRAY_WEAK_NEW_SPACE_OBJECT_TO_CODE_SUB_TYPE',
      'FOREIGN_TYPE',
      'FUNCTION_TEMPLATE_INFO_TYPE',
      'INTERCEPTOR_INFO_TYPE',
      'JS_API_OBJECT_TYPE',
      'JS_ARRAY_BOILERPLATE_TYPE',
      'JS_OBJECT_BOILERPLATE_TYPE',
      'JS_SPECIAL_API_OBJECT_TYPE',
      'MAP_TYPE',
      'OBJECT_TEMPLATE_INFO_TYPE',
      'ODDBALL_TYPE',
      'PROMISE_REACTION_JOB_INFO_TYPE',
      'PROMISE_RESOLVE_THENABLE_JOB_INFO_TYPE',
      'PROPERTY_CELL_TYPE',
      'PROTOTYPE_INFO_TYPE',
      'STACK_FRAME_INFO_TYPE',
      'TRANSITION_ARRAY_TYPE',
      'WEAK_CELL_TYPE',
    ])
  ],
  [
    'code', new Set([
      '*CODE_BUILTIN',
      '*CODE_BYTECODE_HANDLER',
      '*CODE_OPTIMIZED_FUNCTION',
      '*CODE_REGEXP',
      '*CODE_STUB',
      '*FIXED_ARRAY_BYTECODE_ARRAY_CONSTANT_POOL_SUB_TYPE',
      '*FIXED_ARRAY_BYTECODE_ARRAY_HANDLER_TABLE_SUB_TYPE',
      '*FIXED_ARRAY_CODE_STUBS_TABLE_SUB_TYPE',
      '*FIXED_ARRAY_COMPILATION_CACHE_TABLE_SUB_TYPE',
      '*FIXED_ARRAY_DEOPTIMIZATION_DATA_SUB_TYPE',
      '*FIXED_ARRAY_EMBEDDED_OBJECT_SUB_TYPE',
      '*FIXED_ARRAY_HANDLER_TABLE_SUB_TYPE',
      '*FIXED_ARRAY_NOSCRIPT_SHARED_FUNCTION_INFOS_SUB_TYPE',
      '*FIXED_ARRAY_OPTIMIZED_CODE_LITERALS_SUB_TYPE',
      '*FIXED_ARRAY_SHARED_FUNCTION_INFOS_SUB_TYPE',
      'BYTECODE_ARRAY_TYPE',
      'CODE_DATA_CONTAINER_TYPE',
      'FEEDBACK_VECTOR_TYPE',
      'LOAD_HANDLER_TYPE',
      'SCRIPT_TYPE',
      'SHARED_FUNCTION_INFO_TYPE',
      'STORE_HANDLER_TYPE',
    ])
  ],
  ['unclassified', new Set()],
]);

// Maps category to description text that is shown in html.
const CATEGORY_NAMES = new Map([
  ['user', 'JS'],
  ['system', 'Metadata'],
  ['code', 'Code'],
  ['unclassified', 'Unclassified'],
]);

// Instance types that are constructed from their sub types and
// should thus be hidden.
const IGNORED_INSTANCE_TYPES = new Set([
  'FIXED_ARRAY_TYPE',
  'CODE_TYPE',
]);
